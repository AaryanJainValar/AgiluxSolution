# How to Create Cloudinary Upload Preset - Step by Step Guide

## Step 1: Sign Up / Login to Cloudinary

1. Go to **https://cloudinary.com/**
2. Click **Sign Up** (if new) or **Login** (if existing account)
3. Complete registration (free account is sufficient)

## Step 2: Access Your Dashboard

After login, you'll see your **Dashboard** showing:
- **Cloud Name** (e.g., `dxyabc123`) - Copy this, you'll need it!
- API Key and API Secret (we won't use these for unsigned uploads)

## Step 3: Go to Settings

1. Click on the **Settings** icon (gear icon) in the top right corner
2. Or go directly to: **https://console.cloudinary.com/settings**

## Step 4: Navigate to Upload Tab

1. In Settings, click on the **Upload** tab (on the left sidebar)
2. Scroll down to find **Upload presets** section

## Step 5: Create New Upload Preset

1. Click the **Add upload preset** button
2. A form will appear with preset configuration options

## Step 6: Configure Upload Preset

Fill in the following settings:

### Basic Settings:
- **Preset name**: 
  - Enter: `agilux-resumes-unsigned` (or any name you prefer)
  - This will be your `VITE_CLOUDINARY_UPLOAD_PRESET` value

### Signing Mode (IMPORTANT):
- **Signing mode**: Select **Unsigned**
  - ⚠️ This is CRITICAL! Must be "Unsigned" for client-side uploads
  - Signed mode requires server-side API secret (not safe for client)

### Upload Manipulations (Optional):
- **Folder**: `agilux-resumes`
  - This organizes all resumes in a specific folder
- **Allowed formats**: `pdf, doc, docx`
  - Or leave empty to allow all formats
- **Max file size**: `10485760` (10MB in bytes)
  - Or use slider to set to 10MB

### Resource Type:
- **Resource type**: Select **Auto** or **Raw**
  - Auto will detect automatically
  - Raw is good for documents (PDF, DOC)

### Other Settings (Optional):
- **Auto-tagging**: Leave default
- **Moderation**: Leave default (unless you want to moderate uploads)
- **Transformation**: Leave empty (no image transformations needed)

## Step 7: Save the Preset

1. Scroll down and click **Save** button
2. Your preset is now created!

## Step 8: Get Your Credentials

After saving, you need these two values:

1. **Cloud Name**:
   - Found in Dashboard (top right)
   - Example: `dxyabc123`
   - This is your `VITE_CLOUDINARY_CLOUD_NAME`

2. **Upload Preset Name**:
   - The name you just created
   - Example: `agilux-resumes-unsigned`
   - This is your `VITE_CLOUDINARY_UPLOAD_PRESET`

## Step 9: Add to .env File

Create or update your `.env` file in project root:

```env
VITE_CLOUDINARY_CLOUD_NAME=dxyabc123
VITE_CLOUDINARY_UPLOAD_PRESET=agilux-resumes-unsigned
```

## Visual Guide (Text Description)

```
Cloudinary Dashboard
├── Settings (Gear Icon)
    ├── Upload Tab
        ├── Upload Presets Section
            ├── Add upload preset Button
                ├── Form Opens:
                    ├── Preset name: [agilux-resumes-unsigned]
                    ├── Signing mode: [Unsigned] ⭐ IMPORTANT
                    ├── Folder: [agilux-resumes]
                    ├── Allowed formats: [pdf, doc, docx]
                    ├── Max file size: [10MB]
                    └── Save Button
```

## Troubleshooting

### Can't find Upload Presets?
- Make sure you're in **Settings** → **Upload** tab
- Scroll down, it's below "Upload Options" section

### Preset not working?
- Verify **Signing mode** is set to **Unsigned**
- Check preset name has no spaces (use hyphens)
- Verify Cloud Name is correct (no typos)

### Upload fails with "Unauthorized"?
- Upload Preset must be **Unsigned**
- Check Cloud Name matches your account
- Verify preset name is exactly as created (case-sensitive)

## Quick Reference Checklist

✅ Create Cloudinary account
✅ Get Cloud Name from dashboard
✅ Go to Settings → Upload tab
✅ Click "Add upload preset"
✅ Set preset name
✅ Set Signing mode to **Unsigned**
✅ (Optional) Set folder name
✅ (Optional) Set allowed formats
✅ (Optional) Set max file size
✅ Click Save
✅ Copy Cloud Name and Preset Name to .env file

## Security Notes

- ✅ **Unsigned presets are safe** for client-side use
- ✅ They don't expose your API secret
- ✅ You can add restrictions (file size, format)
- ⚠️ Set file size limits to prevent abuse
- ⚠️ Consider adding folder restrictions

## Alternative: Use Upload Widget (Optional)

If you prefer, Cloudinary also offers an Upload Widget that handles uploads automatically. However, the manual preset approach gives you more control and is what we've implemented.

---

**Need Help?**
- Cloudinary Docs: https://cloudinary.com/documentation/upload_presets
- Cloudinary Support: support@cloudinary.com

