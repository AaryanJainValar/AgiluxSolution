import React, { useState } from "react";
import "./Career.css";
import OtherRoutesCommonHeader from "../OtherRoutesCommonHeader/OtherRoutesCommonHeader";
import { Row, Col, Input, Select, Upload, message } from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { uploadToCloudinary, validateResumeFile, fixCloudinaryUrl } from "../../../utils/cloudinary";
import { sendCareerApplicationEmail, sendConfirmationEmail } from "../../../utils/emailjs";

const { TextArea } = Input;
const { Option } = Select;

const Career = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "Android Developer",
        description: "",
        experience: "",
        resumeUrl: null, // Store Cloudinary URL
    });

    const [fileList, setFileList] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleFileChange = async (info) => {
        const { file } = info;

        // If file is removed
        if (info.file.status === 'removed') {
            setFileList([]);
            setFormData(prev => ({
                ...prev,
                resumeUrl: null
            }));
            return;
        }

        // Validate file
        const validation = validateResumeFile(file);
        if (!validation.valid) {
            message.error(validation.error);
            return;
        }
        
        console.log('📋 File validation:', {
            isValid: validation.valid,
            isImage: validation.isImage,
            isDocument: validation.isDocument
        });

        // Show uploading state
        setIsUploading(true);
        setFileList([{
            uid: file.uid,
            name: file.name,
            status: 'uploading',
            percent: 0,
        }]);

        try {
            console.log('📤 Starting Cloudinary upload...');
            console.log('File details:', {
                name: file.name,
                size: file.size,
                type: file.type
            });
            console.log('Cloudinary Config:', {
                cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
                uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
            });

            // Upload to Cloudinary
            const uploadResult = await uploadToCloudinary(file.originFileObj || file);

            console.log('📥 Cloudinary Upload Response:', uploadResult);

            if (uploadResult.success) {
                console.log('✅ Upload Successful!');
                console.log('Resume URL:', uploadResult.url);
                console.log('Public ID:', uploadResult.publicId);
                console.log('File Format:', uploadResult.format);
                console.log('File Size:', uploadResult.bytes, 'bytes');
                console.log('Resource Type:', uploadResult.resourceType || 'raw');

                // Detect file type from file name and URL
                const fileName = file.name || '';
                const fileExt = '.' + fileName.split('.').pop().toLowerCase();
                const urlLower = uploadResult.url.toLowerCase();
                
                // Determine if file is document or image
                const isDocument = uploadResult.resourceType === 'raw' || 
                    ['.pdf', '.doc', '.docx'].includes(fileExt) ||
                    urlLower.includes('.pdf') || 
                    urlLower.includes('.doc') ||
                    ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type);
                    
                const isImage = uploadResult.resourceType === 'image' || 
                    ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(fileExt) ||
                    urlLower.includes('.jpg') || urlLower.includes('.jpeg') || urlLower.includes('.png') ||
                    file.type?.startsWith('image/');
                
                console.log('🔍 File type detection:', {
                    fileName: fileName,
                    fileExt: fileExt,
                    fileType: file.type,
                    resourceType: uploadResult.resourceType,
                    isDocument: isDocument,
                    isImage: isImage,
                    originalUrl: uploadResult.url
                });
                
                // Fix URL - ensure documents use /raw/upload/ and images use /image/upload/
                let resumeUrl = fixCloudinaryUrl(uploadResult.url, isDocument);
                
                // Double-check: If URL still has /image/upload/ but file is PDF, force fix it
                if (isDocument && resumeUrl.includes('/image/upload/')) {
                    resumeUrl = resumeUrl.replace('/image/upload/', '/raw/upload/');
                    console.log('🔧 Career Component: Forced fix for document URL:', resumeUrl);
                }
                
                // Verify final URL format
                if (isDocument) {
                    if (resumeUrl.includes('/raw/upload/')) {
                        console.log('✅ Document URL is correct format (raw/upload/)');
                    } else {
                        console.error('❌ Document URL is WRONG format! Should be /raw/upload/ but got:', resumeUrl);
                        // Force fix one more time
                        resumeUrl = resumeUrl.replace('/image/upload/', '/raw/upload/');
                    }
                } else if (isImage) {
                    if (resumeUrl.includes('/image/upload/')) {
                        console.log('✅ Image URL is correct format (image/upload/)');
                    } else {
                        console.warn('⚠️  Image URL might need fixing');
                    }
                } else {
                    console.warn('⚠️  Unknown file type, URL format:', resumeUrl);
                }

                // Update file list with success status
                setFileList([{
                    uid: file.uid,
                    name: file.name,
                    status: 'done',
                    url: resumeUrl,
                    response: uploadResult,
                }]);

                // Store Cloudinary URL in form data
                setFormData(prev => ({
                    ...prev,
                    resumeUrl: resumeUrl
                }));

                console.log('✅ Resume URL stored in form data:', resumeUrl);
                console.log('📎 Test URL in browser:', resumeUrl);
                message.success('Resume uploaded successfully!');
            } else {
                console.error('❌ Upload Failed:', uploadResult.error);
                // Upload failed
                setFileList([{
                    uid: file.uid,
                    name: file.name,
                    status: 'error',
                }]);
                message.error(uploadResult.error || 'Failed to upload resume. Please try again.');
            }
        } catch (error) {
            console.error('❌ Upload Error:', error);
            console.error('Error details:', {
                message: error.message,
                stack: error.stack
            });
            setFileList([{
                uid: file.uid,
                name: file.name,
                status: 'error',
            }]);
            message.error('An error occurred while uploading. Please try again.');
        } finally {
            setIsUploading(false);
            console.log('Upload process completed');
        }
    };

    const beforeUpload = (file) => {
        // Validate file before upload (allows PDF, DOC, DOCX, and images)
        const validation = validateResumeFile(file);
        if (!validation.valid) {
            message.error(validation.error);
            return Upload.LIST_IGNORE;
        }
        console.log('✅ File validated:', {
            name: file.name,
            type: file.type,
            isImage: validation.isImage,
            isDocument: validation.isDocument
        });
        return false; // Prevent auto upload, we'll handle it manually
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.firstName || !formData.lastName || !formData.email ||
            !formData.phone || !formData.position || !formData.description ||
            !formData.experience || !formData.resumeUrl) {
            message.error('Please fill in all required fields and upload your resume!');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            message.error('Please enter a valid email address!');
            return;
        }

        // Phone validation (basic)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
            message.error('Please enter a valid 10-digit phone number!');
            return;
        }

        // Check if resume is uploaded
        if (!formData.resumeUrl) {
            message.error('Please upload your resume before submitting!');
            return;
        }

        setIsSubmitting(true);

        try {
            // Send email via EmailJS
            const emailResult = await sendCareerApplicationEmail({
                ...formData,
                resumeUrl: formData.resumeUrl,
            });

            if (emailResult.success) {
                message.success('Application submitted successfully! We will get back to you soon.');

                // Send confirmation email to applicant (optional)
                try {
                    await sendConfirmationEmail(
                        formData.email,
                        `${formData.firstName} ${formData.lastName}`
                    );
                } catch (confirmationError) {
                    // Don't fail if confirmation email fails
                    console.log('Confirmation email skipped or failed:', confirmationError);
                }

                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    position: "Android Developer",
                    description: "",
                    experience: "",
                    resumeUrl: null,
                });
                setFileList([]);
            } else {
                message.error(emailResult.error || 'Failed to submit application. Please try again.');
            }
        } catch (error) {
            console.error('Submit error:', error);
            message.error('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const positions = [
        "Android Developer",
        "iOS Developer",
        "Web Developer",
        "Full Stack Developer",
        "UI/UX Designer",
        "Digital Marketing Specialist",
        "SEO Specialist",
        "Content Writer",
        "Project Manager",
        "Business Analyst"
    ];

    return (
        <div className="CareerContainer">
            <OtherRoutesCommonHeader
                title=""
                image="/Images/CareerPage.jpeg"
            />
            <div className="Container MarginTopMedium">
                <div className="CareerContent SectionTopPadding PaddingbottomMedium">
                    <div className="CareerHeader text-center MarginBottomMedium">
                        <h3 className="ColorBlack">
                            Join Our <span>Team</span>
                        </h3>
                        <p className="ColorBlack">
                            We're always looking for talented individuals to join our team.
                            If you're passionate about technology and want to make an impact, we'd love to hear from you.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="CareerForm MarginTopMedium">
                        <Row gutter={[24, 24]}>
                            {/* First Name */}
                            <Col lg={12} md={12} xs={24}>
                                <div className="FormGroup">
                                    <label className="FormLabel">First Name <span className="Required">*</span></label>
                                    <Input
                                        size="large"
                                        placeholder="Enter your first name"
                                        value={formData.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                        className="FormInput"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </Col>

                            {/* Last Name */}
                            <Col lg={12} md={12} xs={24}>
                                <div className="FormGroup">
                                    <label className="FormLabel">Last Name <span className="Required">*</span></label>
                                    <Input
                                        size="large"
                                        placeholder="Enter your last name"
                                        value={formData.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                        className="FormInput"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </Col>

                            {/* Email */}
                            <Col lg={12} md={12} xs={24}>
                                <div className="FormGroup">
                                    <label className="FormLabel">Email <span className="Required">*</span></label>
                                    <Input
                                        type="email"
                                        size="large"
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="FormInput"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </Col>

                            {/* Phone Number */}
                            <Col lg={12} md={12} xs={24}>
                                <div className="FormGroup">
                                    <label className="FormLabel">Phone Number <span className="Required">*</span></label>
                                    <Input
                                        type="tel"
                                        size="large"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, ''))}
                                        className="FormInput"
                                        maxLength={10}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </Col>

                            {/* Position */}
                            <Col lg={12} md={12} xs={24}>
                                <div className="FormGroup">
                                    <label className="FormLabel">Position <span className="Required">*</span></label>
                                    <Select
                                        size="large"
                                        placeholder="Select a position"
                                        value={formData.position}
                                        onChange={(value) => handleInputChange('position', value)}
                                        className="FormSelect"
                                        disabled={isSubmitting}
                                    >
                                        {positions.map((pos) => (
                                            <Option key={pos} value={pos}>
                                                {pos}
                                            </Option>
                                        ))}
                                    </Select>
                                </div>
                            </Col>

                            {/* Experience */}
                            <Col lg={12} md={12} xs={24}>
                                <div className="FormGroup">
                                    <label className="FormLabel">Experience <span className="Required">*</span></label>
                                    <Select
                                        size="large"
                                        placeholder="Select your experience"
                                        value={formData.experience}
                                        onChange={(value) => handleInputChange('experience', value)}
                                        className="FormSelect"
                                        disabled={isSubmitting}
                                    >
                                        <Option value="0-1 years">0-1 years</Option>
                                        <Option value="1-2 years">1-2 years</Option>
                                        <Option value="2-3 years">2-3 years</Option>
                                        <Option value="3-5 years">3-5 years</Option>
                                        <Option value="5+ years">5+ years</Option>
                                    </Select>
                                </div>
                            </Col>

                            {/* Description */}
                            <Col lg={24} md={24} xs={24}>
                                <div className="FormGroup">
                                    <label className="FormLabel">Description <span className="Required">*</span></label>
                                    <TextArea
                                        rows={6}
                                        placeholder="Tell us about yourself, your skills, and why you'd like to join our team..."
                                        value={formData.description}
                                        onChange={(e) => handleInputChange('description', e.target.value)}
                                        className="FormTextArea"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </Col>

                            {/* Resume Upload */}
                            <Col lg={24} md={24} xs={24}>
                                <div className="FormGroup">
                                    <label className="FormLabel">Upload Resume <span className="Required">*</span></label>
                                    <Upload
                                        fileList={fileList}
                                        onChange={handleFileChange}
                                        beforeUpload={beforeUpload}
                                        maxCount={1}
                                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.webp,.svg"
                                        disabled={isUploading || isSubmitting}
                                    >
                                        <button 
                                            type="button" 
                                            className="UploadButton"
                                            disabled={isUploading || isSubmitting}
                                        >
                                            {isUploading ? (
                                                <>
                                                    <LoadingOutlined /> Uploading to Cloudinary...
                                                </>
                                            ) : (
                                                <>
                                                    <UploadOutlined /> Click to Upload Resume (PDF/DOC)
                                                </>
                                            )}
                                        </button>
                                    </Upload>
                                    <p className="UploadHint">
                                        Accepted formats: PDF, DOC, DOCX, Images (JPG, PNG, GIF, WEBP, SVG) - Max size: 10MB - Files are uploaded to Cloudinary
                                    </p>
                                    {formData.resumeUrl && (
                                        <p className="UploadSuccess">
                                            ✓ Resume uploaded successfully
                                        </p>
                                    )}
                                </div>
                            </Col>

                            {/* Submit Button */}
                            <Col lg={24} md={24} xs={24}>
                                <div className="FormSubmitContainer text-center">
                                    <button 
                                        type="submit" 
                                        className="Button"
                                        disabled={isSubmitting || isUploading || !formData.resumeUrl}
                                    >
                                        <span>
                                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                        </span>
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Career;
