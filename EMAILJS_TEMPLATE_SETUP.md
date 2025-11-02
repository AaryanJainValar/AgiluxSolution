# EmailJS Template Setup Guide - Career Form

## Step-by-Step Template Creation

### Step 1: Login to EmailJS
1. Go to **https://www.emailjs.com/**
2. Login to your account
3. You should be in your Dashboard

### Step 2: Go to Email Templates
1. Click **Email Templates** in the left sidebar
2. Click **Create New Template** button
3. You'll see a template editor

### Step 3: Configure Template Settings

**Template Name:**
```
Career Application - Agilux Solution
```

**Template ID:** (Auto-generated, copy this for your `.env` file)
- Format: `template_xxxxxxx`
- Copy this ID - you'll need it!

### Step 4: Set Up Template Content

#### A. Email Subject Line
Click on **Subject** field and enter:
```
New Career Application - {{position}} - {{from_name}}
```

#### B. Email Content (HTML Format)

Click on the **Content** area and use this template:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Inter', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #000;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            background-color: #f9f9f9;
            padding: 30px;
            margin: 20px 0;
        }
        .info-section {
            background-color: #fff;
            padding: 20px;
            margin: 15px 0;
            border-left: 4px solid #eab236;
        }
        .info-row {
            margin: 10px 0;
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }
        .info-label {
            font-weight: bold;
            color: #666;
            display: inline-block;
            width: 150px;
        }
        .info-value {
            color: #000;
        }
        .resume-link {
            display: inline-block;
            background-color: #eab236;
            color: #000;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin: 20px 0;
        }
        .resume-link:hover {
            background-color: #d4a030;
        }
        .description-box {
            background-color: #fff;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin: 15px 0;
            white-space: pre-wrap;
        }
        .footer {
            text-align: center;
            color: #999;
            font-size: 12px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>📧 New Career Application</h1>
        <p>Agilux Solution</p>
    </div>

    <div class="content">
        <h2>Applicant Information</h2>
        
        <div class="info-section">
            <div class="info-row">
                <span class="info-label">Full Name:</span>
                <span class="info-value">{{from_name}}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value">{{from_email}}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Phone:</span>
                <span class="info-value">{{phone}}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Position Applied:</span>
                <span class="info-value"><strong>{{position}}</strong></span>
            </div>
            <div class="info-row">
                <span class="info-label">Experience:</span>
                <span class="info-value">{{experience}}</span>
            </div>
        </div>

        <h3>Description / Cover Letter</h3>
        <div class="description-box">
{{description}}
        </div>

        <h3>📎 Resume / Document</h3>
        <p>Click the button below to view/download the applicant's resume:</p>
        <a href="{{resume_link}}" class="resume-link" target="_blank">
            👁️ View Resume
        </a>
        <p style="font-size: 12px; color: #999; margin-top: 10px;">
            Resume Link: <a href="{{resume_link}}" style="color: #eab236;">{{resume_link}}</a>
        </p>
    </div>

    <div class="footer">
        <p>This email was automatically generated from the Agilux Solution Career Form.</p>
        <p>Reply directly to this email to contact the applicant.</p>
    </div>
</body>
</html>
```

#### C. Plain Text Version (Alternative)

If you prefer plain text, use this:

```
===========================================
NEW CAREER APPLICATION - Agilux Solution
===========================================

APPLICANT INFORMATION:
---------------------
Full Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Position Applied: {{position}}
Experience: {{experience}}

DESCRIPTION:
------------
{{description}}

RESUME:
-------
View/Download Resume: {{resume_link}}

---
This email was automatically generated from the Agilux Solution Career Form.
Reply to: {{from_email}}
```

### Step 5: Template Variables

EmailJS will automatically detect these variables from the template:
- `{{from_name}}` - Applicant's full name
- `{{from_email}}` - Applicant's email
- `{{phone}}` - Phone number
- `{{position}}` - Position applied for
- `{{experience}}` - Years of experience
- `{{description}}` - Applicant's description/cover letter
- `{{resume_link}}` - Cloudinary URL to resume

### Step 6: Test Your Template

1. Click **Send Test Email** button
2. Fill in test values:
   ```
   from_name: John Doe
   from_email: john@example.com
   phone: 1234567890
   position: Android Developer
   experience: 2-3 years
   description: Test description
   resume_link: https://example.com/resume.pdf
   ```
3. Click **Send Test**
4. Check your email inbox

### Step 7: Save Template

1. Click **Save** button
2. Copy the **Template ID** (starts with `template_`)
3. Update your `.env` file:
   ```env
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   ```

## Alternative: Simple Text Template

If HTML is too complex, use this simpler version:

**Subject:**
```
New Career Application - {{position}}
```

**Content:**
```
Hello,

A new career application has been received:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Position: {{position}}
Experience: {{experience}}

Description:
{{description}}

Resume: {{resume_link}}

---
Agilux Solution Career Form
```

## Template Variables Reference

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `{{to_name}}` | Recipient name | Agilux Solution Team |
| `{{from_name}}` | Applicant full name | John Doe |
| `{{from_email}}` | Applicant email | john@example.com |
| `{{phone}}` | Phone number | 1234567890 |
| `{{position}}` | Job position | Android Developer |
| `{{experience}}` | Years of experience | 2-3 years |
| `{{description}}` | Applicant description | Full text description |
| `{{resume_link}}` | Cloudinary resume URL | https://res.cloudinary.com/... |
| `{{message}}` | Full formatted message | (Optional - auto-generated) |

## Quick Setup Checklist

- [ ] Login to EmailJS Dashboard
- [ ] Go to Email Templates
- [ ] Click "Create New Template"
- [ ] Set Template Name
- [ ] Add Subject: `New Career Application - {{position}} - {{from_name}}`
- [ ] Add Content (use HTML or Plain Text template above)
- [ ] Add all template variables: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{position}}`, `{{experience}}`, `{{description}}`, `{{resume_link}}`
- [ ] Send Test Email to verify
- [ ] Save Template
- [ ] Copy Template ID
- [ ] Update `.env` file with Template ID
- [ ] Restart dev server

## Testing

After setup:
1. Fill out Career form on your website
2. Upload resume
3. Submit form
4. Check your email inbox for the application email
5. Click resume link to verify it opens correctly

---

**Need Help?**
- EmailJS Docs: https://www.emailjs.com/docs/user-guide/creating-templates/
- EmailJS Support: https://www.emailjs.com/support/

