# Formspree Setup Guide for Contact Form

## 🚀 Quick Setup (5 minutes)

Your contact form is already integrated with Formspree! You just need to get your unique form ID to make it work.

### Step 1: Sign up for Formspree
1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" (it's free!)
3. Create an account with your email

### Step 2: Create a New Form
1. After signing in, click "New Form"
2. Enter your email: `abhishekjoshi2026@gmail.com`
3. Give it a name like "Portfolio Contact Form"
4. Click "Create Form"

### Step 3: Get Your Form ID
1. You'll see a form endpoint like: `https://formspree.io/f/xblrjkdl`
2. Copy the part after `/f/` (example: `xblrjkdl`)
3. This is your **Form ID**

### Step 4: Update Your Code
1. Open `src/pages/Contact.jsx`
2. Find line 497: `'https://formspree.io/f/YOUR_FORM_ID'`
3. Replace `YOUR_FORM_ID` with your actual Form ID
4. Also update line 676: `action="https://formspree.io/f/YOUR_FORM_ID"`

### Example:
If your Form ID is `xblrjkdl`, change:
```javascript
// Line 497
const response = await fetch('https://formspree.io/f/xblrjkdl', {

// Line 676  
action="https://formspree.io/f/xblrjkdl"
```

### Step 5: Test Your Form
1. Save the file
2. Go to your portfolio contact page
3. Fill out and submit the form
4. Check your email for the message!

## ✨ Features Already Implemented

✅ **Real form submission** - Messages go directly to your email  
✅ **Form validation** - Prevents invalid submissions  
✅ **Loading states** - Shows spinner while sending  
✅ **Success/Error messages** - User feedback  
✅ **Auto-reset form** - Clears after successful submission  
✅ **Email replies** - Recipients can reply directly to sender  
✅ **Subject customization** - Organized email subjects  

## 🎯 What Happens When Someone Submits

1. **Validation** - Form checks all required fields
2. **Submission** - Sends to Formspree with proper formatting
3. **Email to You** - You receive an email with:
   - Sender's name and email
   - Phone number (if provided)
   - Subject category
   - Full message
   - Reply-to address set to sender
4. **User Feedback** - Sender sees success message
5. **Form Reset** - Form clears for next use

## 🔧 Customization Options

You can customize the email format by modifying the fetch body in `handleSubmit`:

```javascript
body: JSON.stringify({
  name: `${formData.firstName} ${formData.lastName}`,
  email: formData.email,
  phone: formData.phone,
  subject: formData.subject,
  message: formData.message,
  _replyto: formData.email,
  _subject: `New contact from ${formData.firstName} ${formData.lastName}`,
  // Add more fields here if needed
}),
```

## 📧 Backup Email Link

If Formspree fails, users can still email you directly via the email links in the contact info cards.

## 🆓 Free Plan Limits

Formspree free plan includes:
- 50 submissions per month
- Basic spam filtering
- Email notifications
- Form analytics

For higher volume, upgrade to a paid plan.

---

**That's it! Your contact form will now send real emails.** 🎉