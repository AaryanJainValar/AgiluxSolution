# Cloudinary Setup Guide

## Step 1: Create Cloudinary Account
1. Go to https://cloudinary.com/
2. Sign up for a free account
3. After signup, you'll be redirected to your dashboard

## Step 2: Get Cloudinary Credentials
1. In your Cloudinary dashboard, go to **Settings** (gear icon)
2. Under **Product Environment Credentials**, you'll find:
   - **Cloud Name**: Copy this value
   - **API Key**: You'll see this (we'll use Upload Preset instead)
   - **API Secret**: Keep this secret (not needed for unsigned uploads)

## Step 3: Create Upload Preset (Unsigned)
1. Go to **Settings** → **Upload** tab
2. Scroll down to **Upload presets**
3. Click **Add upload preset**
4. Configure:
   - **Preset name**: `agilux-resumes-unsigned` (or any name you prefer)
   - **Signing mode**: Select **Unsigned** (this allows client-side uploads)
   - **Folder**: `agilux-resumes` (optional, for organization)
   - **Allowed formats**: `pdf, doc, docx`
   - **Max file size**: `10MB`
   - Click **Save**

## Step 4: Add to Environment Variables
Create a `.env` file in your project root:

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
VITE_CLOUDINARY_UPLOAD_PRESET=agilux-resumes-unsigned
```

## Step 5: Security (Important)
- **Never commit your `.env` file** to Git
- The Upload Preset should be set to **Unsigned** for client-side uploads
- Consider adding upload restrictions in Cloudinary settings:
  - Set upload limits
  - Configure file type restrictions
  - Set up automatic transformations if needed

## Testing
After setup, test the upload functionality in your Career form. Files should appear in your Cloudinary Media Library under the `agilux-resumes` folder.

