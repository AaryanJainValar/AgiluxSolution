/**
 * Test Cloudinary Configuration
 * Run this to check if your Cloudinary setup is correct
 * 
 * Usage: node test-cloudinary-setup.js
 */

// Check if environment variables are set
console.log('\n=== Cloudinary Configuration Check ===\n');

const cloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME || import.meta?.env?.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = process.env.VITE_CLOUDINARY_UPLOAD_PRESET || import.meta?.env?.VITE_CLOUDINARY_UPLOAD_PRESET;

console.log('1. Checking Environment Variables:');
console.log('   VITE_CLOUDINARY_CLOUD_NAME:', cloudName ? '✅ Set' : '❌ Missing');
console.log('   VITE_CLOUDINARY_UPLOAD_PRESET:', uploadPreset ? '✅ Set' : '❌ Missing');

if (cloudName) {
    console.log('   Cloud Name value:', cloudName);
}
if (uploadPreset) {
    console.log('   Upload Preset value:', uploadPreset);
}

console.log('\n2. Expected Cloudinary API Endpoint:');
if (cloudName) {
    console.log(`   https://api.cloudinary.com/v1_1/${cloudName}/upload`);
} else {
    console.log('   ❌ Cannot generate endpoint (Cloud Name missing)');
}

console.log('\n3. Upload Configuration:');
console.log('   Folder: agilux-resumes');
console.log('   Resource Type: auto');
console.log('   Max File Size: 10MB');
console.log('   Allowed Formats: PDF, DOC, DOCX');

console.log('\n4. Testing Connection...');
if (cloudName && uploadPreset) {
    console.log('   ✅ Configuration looks good!');
    console.log('   ⚠️  Note: Actual upload test requires browser environment');
    console.log('   ⚠️  Test in browser console or Career form');
} else {
    console.log('   ❌ Missing required configuration');
    console.log('\n   Please create .env file with:');
    console.log('   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name');
    console.log('   VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset');
}

console.log('\n=== Test Complete ===\n');

