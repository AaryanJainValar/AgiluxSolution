# Cloudinary Folder Setup - Career Folder

## Folder Configuration

Your Cloudinary folder is now set to: **`career`**

All uploaded resumes will be stored in this folder structure:
```
career/
  ├── filename1.pdf
  ├── filename2.docx
  └── ...
```

## Important Notes

### 1. Upload Preset Configuration

Make sure your Cloudinary upload preset (`agilux-solution`) has:

✅ **Signing Mode**: "Unsigned" (for client-side uploads)
✅ **Resource Type**: "Auto" or allow both "Image" and "Raw" 
✅ **Folder**: Should allow custom folders (or can be set to default `career`)

### 2. PDF Upload Issue

If PDFs are being uploaded as images instead of raw files:

**Option A: Fix in Cloudinary Dashboard**
1. Go to Cloudinary Dashboard → Settings → Upload
2. Find your upload preset (`agilux-solution`)
3. Under "Resource type", set it to **"Auto"** or ensure **"Raw"** is enabled
4. Save the preset

**Option B: The code will use whatever URL Cloudinary returns**
- If Cloudinary uploads PDF as image → uses `/image/upload/` URL
- If Cloudinary uploads PDF as raw → uses `/raw/upload/` URL
- The code now respects Cloudinary's actual resource type

### 3. Testing the Upload

After uploading a PDF:
1. Check browser console logs
2. Look for: `📄 Cloudinary actual resource_type:` 
3. This tells you what type Cloudinary used
4. The URL in the log is the working URL

### 4. Folder Structure

Files will be uploaded to:
```
https://res.cloudinary.com/dvo30ytcq/{resource_type}/upload/v{version}/career/{filename}.pdf
```

Where:
- `{resource_type}` = `image` or `raw` (depends on Cloudinary settings)
- `{version}` = Cloudinary version number
- `{filename}` = your file name

## Current Configuration

✅ Folder name: `career`
✅ Upload preset: `agilux-solution`
✅ Cloud name: `dvo30ytcq`

## If PDFs Still Don't Open

1. **Check the actual URL in browser console** - use that exact URL
2. **Verify upload preset allows raw files** - go to Cloudinary dashboard
3. **Try uploading again** - new uploads will use the `career` folder

---

**Note**: PDFs uploaded to `/image/upload/` CAN still be viewed/downloaded in browsers. The path doesn't prevent PDF viewing - the 404 usually means the file doesn't exist at that path.

