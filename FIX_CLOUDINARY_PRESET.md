# Fix: "Upload preset must be whitelisted for unsigned uploads"

## Problem
Your Cloudinary upload preset `agilux-solution` is not configured for unsigned uploads.

## Quick Fix Steps

### Step 1: Go to Cloudinary Dashboard
1. Login to https://cloudinary.com/console
2. Click **Settings** (gear icon) in top right
3. Click **Upload** tab on left sidebar

### Step 2: Find Your Preset
1. Scroll down to **Upload presets** section
2. Find preset: `agilux-solution`
3. Click on it to edit

### Step 3: Enable Unsigned Mode (CRITICAL)
1. Look for **Signing mode** or **Signing** option
2. Change it to **Unsigned** (not "Signed")
3. This is REQUIRED for client-side uploads

### Step 4: Save
1. Click **Save** button
2. Preset is now ready for unsigned uploads

## Alternative: Create New Preset (If Edit Doesn't Work)

If you can't edit the existing preset, create a new one:

1. In **Settings → Upload → Upload presets**
2. Click **Add upload preset**
3. Configure:
   - **Preset name**: `agilux-resumes-unsigned`
   - **Signing mode**: **Unsigned** ⭐ MUST BE UNSIGNED
   - **Folder**: `agilux-resumes`
   - **Allowed formats**: `pdf, doc, docx`
   - **Max file size**: `10MB`
4. Click **Save**

5. Update your `.env` file:
   ```env
   VITE_CLOUDINARY_UPLOAD_PRESET=agilux-resumes-unsigned
   ```

## Verify Preset Configuration

After fixing, verify:
- ✅ Signing mode = **Unsigned**
- ✅ Preset name matches your `.env` file
- ✅ File restrictions are set (optional but recommended)

## Test Again

After fixing the preset:
1. Restart dev server: `npm run dev`
2. Try uploading resume again
3. Should work without error!

## Why This Error Happens

- **Signed presets** require API secret (server-side only)
- **Unsigned presets** allow client-side uploads (browser)
- Your code uploads from browser → needs **Unsigned** preset

---

**After fixing, the upload should work! ✅**

