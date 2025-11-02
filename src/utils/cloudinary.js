/**
 * Cloudinary Upload Utility
 * Handles file uploads to Cloudinary
 */

export const uploadToCloudinary = async (file) => {
    console.log('🔧 Cloudinary Utility: Starting upload process...');

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    console.log('Environment Variables:', {
        cloudName: cloudName || '❌ NOT SET',
        uploadPreset: uploadPreset || '❌ NOT SET'
    });

    if (!cloudName || !uploadPreset) {
        const error = 'Cloudinary configuration missing. Please check .env file.';
        console.error('❌', error);
        return {
            success: false,
            error: error,
        };
    }

    console.log('⚠️  IMPORTANT: Make sure your upload preset is set to "Unsigned" in Cloudinary settings!');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', 'career'); // Organize resumes in a folder

    // Determine resource type based on file type
    // Images: use 'image', Documents (PDF/DOC): use 'raw'
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const documentExtensions = ['.pdf', '.doc', '.docx'];

    // Determine if file is image or document
    const isImageFile = imageExtensions.includes(fileExtension) || file.type?.startsWith('image/');
    const isDocumentFile = documentExtensions.includes(fileExtension) ||
        file.type?.includes('pdf') ||
        file.type?.includes('word') ||
        file.type?.includes('document') ||
        file.type === 'application/pdf' ||
        file.type === 'application/msword' ||
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    let resourceType = 'raw'; // Default to 'raw' for documents
    if (isImageFile) {
        resourceType = 'image';
    } else if (isDocumentFile) {
        resourceType = 'raw';
    }

    // Store file type info for URL fixing later
    const fileInfo = {
        isImage: isImageFile,
        isDocument: isDocumentFile,
        fileExtension: fileExtension
    };

    formData.append('resource_type', resourceType);
    console.log('📄 File type detection:', {
        fileName: file.name,
        fileType: file.type,
        fileExtension: fileExtension,
        resourceType: resourceType,
        isImageFile: isImageFile,
        isDocumentFile: isDocumentFile
    });

    // Cloudinary upload endpoint (same for all resource types)
    // The resource_type is sent as a FormData parameter, not in the URL
    const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    console.log('📡 Upload URL:', uploadUrl);
    console.log('📦 FormData contents:', {
        file: file.name,
        upload_preset: uploadPreset,
        folder: 'career',
        resource_type: resourceType // 'image' for images, 'raw' for documents
    });

    try {
        console.log('🚀 Sending request to Cloudinary...');
        const response = await fetch(uploadUrl, {
            method: 'POST',
            body: formData,
        });

        console.log('📨 Response Status:', response.status, response.statusText);

        if (!response.ok) {
            const errorData = await response.json();
            console.error('❌ Cloudinary API Error:', errorData);
            throw new Error(errorData.error?.message || `Upload failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ Cloudinary API Success Response:', data);
        console.log('📎 Full Response Data:', JSON.stringify(data, null, 2));
        
        // IMPORTANT: Use the actual URL that Cloudinary returns
        // Cloudinary knows where the file actually exists
        let fileUrl = data.secure_url || data.url;
        
        // Detect file type from filename or extension
        const fileName = file.name || data.public_id || '';
        const fileExt = '.' + fileName.split('.').pop().toLowerCase();
        const isDocumentExt = ['.pdf', '.doc', '.docx'].includes(fileExt);
        const isImageExt = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(fileExt);
        
        // Check what resource_type Cloudinary actually used
        const actualResourceType = data.resource_type || 'auto';
        console.log('📄 Cloudinary actual resource_type:', actualResourceType);
        console.log('📄 File extension:', fileExt);
        console.log('📄 Original secure_url from Cloudinary:', fileUrl);
        
        // Only fix URL if:
        // 1. File is a document (.pdf, .doc, .docx)
        // 2. Cloudinary returned it as 'image' (wrong type)
        // 3. We sent resource_type='raw' but got 'image' back
        if (isDocumentExt && actualResourceType === 'image' && fileUrl && fileUrl.includes('/image/upload/')) {
            // Cloudinary uploaded PDF as image, but we need it as raw
            // Try to construct raw URL using the same public_id and version
            const version = data.version || '';
            const publicId = data.public_id || '';
            const format = data.format || fileExt.replace('.', '') || 'pdf';
            
            if (version && publicId) {
                // Construct raw URL: the file might still be accessible as raw even if uploaded as image
                const rawUrl = `https://res.cloudinary.com/${cloudName}/raw/upload/v${version}/${publicId}${format ? '.' + format : ''}`;
                
                // First, try to use the image URL (which actually works for PDFs sometimes)
                // If that fails, we can use raw URL
                console.log('⚠️  PDF uploaded as image resource. Image URL:', fileUrl);
                console.log('⚠️  Alternative raw URL (if needed):', rawUrl);
                
                // Use the actual URL Cloudinary returned - PDFs can work from /image/upload/ too
                // The issue might be elsewhere, so let's use what Cloudinary gives us
                fileUrl = fileUrl; // Keep the actual URL
                console.log('✅ Using Cloudinary returned URL:', fileUrl);
            }
        }
        
        // For images, use the URL as-is
        if (isImageExt) {
            console.log('✅ Image file - using URL as-is:', fileUrl);
        }

        // Verify URL format matches file type
        const hasRawFormat = fileUrl && fileUrl.includes('/raw/upload/');
        const hasImageFormat = fileUrl && fileUrl.includes('/image/upload/');
        
        console.log('📄 File extension:', fileExt);
        console.log('📄 Resource type from API:', actualResourceType);
        console.log('🔗 Final URL format check:', {
            isDocument: isDocumentExt,
            isImage: isImageExt,
            hasRawFormat: hasRawFormat,
            hasImageFormat: hasImageFormat,
            finalUrl: fileUrl
        });
        
        console.log('📄 Final File URL:', fileUrl);
        if (isDocumentExt) {
            console.log('✅ Document URL:', fileUrl);
            console.log('⚠️  Note: PDFs uploaded as "image" resource can still be viewed in browsers');
        } else if (isImageExt) {
            console.log('✅ Image URL:', fileUrl);
        }

        const result = {
            success: true,
            url: fileUrl,
            publicId: data.public_id,
            format: data.format,
            bytes: data.bytes,
            width: data.width,
            height: data.height,
            createdAt: data.created_at,
            version: data.version,
            signature: data.signature,
            resourceType: data.resource_type
        };

        console.log('📋 Processed Result:', result);

        return result;
    } catch (error) {
        console.error('❌ Cloudinary upload error:', error);
        console.error('Error type:', error.name);
        console.error('Error message:', error.message);
        if (error.stack) {
            console.error('Error stack:', error.stack);
        }
        return {
            success: false,
            error: error.message || 'Failed to upload file',
        };
    }
};

/**
 * Fix Cloudinary URL if needed
 * For documents (PDF/DOC), ensures URL uses /raw/upload/
 * For images, keeps /image/upload/
 * 
 * @param {string} url - The Cloudinary URL to fix
 * @param {boolean} isDocument - Whether the file is a document (PDF/DOC) or image
 * @returns {string} - Fixed URL with correct format
 */
export const fixCloudinaryUrl = (url, isDocument = true) => {
    if (!url) return url;

    // Detect file type from URL extension if isDocument is not explicitly provided
    const urlLower = url.toLowerCase();
    const isPdfInUrl = urlLower.includes('.pdf') || urlLower.includes('/pdf');
    const isDocInUrl = urlLower.includes('.doc') || urlLower.includes('.docx');
    const isImageInUrl = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].some(ext => urlLower.includes(ext));

    // Auto-detect if not explicitly set
    let shouldBeRaw = isDocument;
    if (isDocument === undefined || isDocument === null) {
        shouldBeRaw = isPdfInUrl || isDocInUrl || (!isImageInUrl && (urlLower.includes('.pdf') || urlLower.includes('.doc')));
    }

    // CRITICAL: Always fix PDFs and documents to use /raw/upload/
    if (shouldBeRaw && url.includes('/image/upload/')) {
        const fixedUrl = url.replace('/image/upload/', '/raw/upload/');
        console.log('🔧 fixCloudinaryUrl: Fixed URL from image to raw (document):', fixedUrl);
        return fixedUrl;
    }

    // Fix images to use /image/upload/
    if (!shouldBeRaw && url.includes('/raw/upload/')) {
        const fixedUrl = url.replace('/raw/upload/', '/image/upload/');
        console.log('🔧 fixCloudinaryUrl: Fixed URL from raw to image:', fixedUrl);
        return fixedUrl;
    }

    // Final check: if URL has .pdf extension but still uses /image/upload/, force fix it
    if (urlLower.includes('.pdf') && url.includes('/image/upload/')) {
        const fixedUrl = url.replace('/image/upload/', '/raw/upload/');
        console.log('🔧 fixCloudinaryUrl: FORCED FIX for PDF with /image/upload/ to /raw/upload/:', fixedUrl);
        return fixedUrl;
    }

    return url;
};

/**
 * Validate file before upload
 * Allows: PDF, DOC, DOCX, and Image files (JPG, PNG, GIF, etc.)
 */
export const validateResumeFile = (file) => {
    // Document types
    const validDocumentTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    // Image types
    const validImageTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/svg+xml',
    ];

    const validExtensions = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    // Check file type
    const isValidDocumentType = validDocumentTypes.includes(file.type);
    const isValidImageType = validImageTypes.includes(file.type);
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    const isValidExtension = validExtensions.includes(fileExtension);

    if (!isValidDocumentType && !isValidImageType && !isValidExtension) {
        return {
            valid: false,
            error: 'Invalid file type. Please upload PDF, DOC, DOCX, or Image files (JPG, PNG, GIF, etc.).',
        };
    }

    // Check file size
    if (file.size > maxSize) {
        return {
            valid: false,
            error: 'File size exceeds 10MB limit. Please upload a smaller file.',
        };
    }

    return {
        valid: true,
        error: null,
        isImage: isValidImageType || ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(fileExtension),
        isDocument: isValidDocumentType || ['.pdf', '.doc', '.docx'].includes(fileExtension),
    };
};

