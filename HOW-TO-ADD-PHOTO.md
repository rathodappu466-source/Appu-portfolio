# How to Add Your Professional Photo

## Quick Steps

1. **Save your photo** from the second image you shared
2. **Rename it** to: `appu-professional.jpg`
3. **Copy it** to: `c:\Projects\appu-portfolio\assets\images\`

That's it! Refresh your browser and your photo will appear.

## Detailed Instructions

### Option 1: From the Screenshot
1. Right-click on the professional photo (the one with you in the suit with tech dashboards)
2. Click "Save image as..."
3. Navigate to: `c:\Projects\appu-portfolio\assets\images\`
4. Name the file: `appu-professional.jpg`
5. Click Save
6. Refresh your portfolio website (F5 or Ctrl+R)

### Option 2: If You Have the Original Photo
1. Open your photos folder
2. Find the professional photo file
3. Copy it
4. Navigate to: `c:\Projects\appu-portfolio\assets\images\`
5. Paste and rename it to: `appu-professional.jpg`
6. Refresh your portfolio website

## Photo Requirements

- **File name**: MUST be exactly `appu-professional.jpg` (case-sensitive on some systems)
- **Location**: MUST be in `assets/images/` folder
- **Format**: JPG/JPEG (recommended) or PNG
- **Size**: Recommended 400-800px wide for best quality

## Troubleshooting

### Photo doesn't appear?
1. Check the file name is exactly: `appu-professional.jpg`
2. Check it's in the right folder: `assets\images\`
3. Try refreshing with Ctrl+Shift+R (hard refresh)
4. Open browser console (F12) and check for errors

### Photo looks stretched or odd?
- The CSS is optimized for portrait/square photos
- If your photo is very wide, you might want to crop it to a more square aspect ratio

## Using a Different File Name

If you want to use a different file name, edit `js/script.js`:

Find this line:
```javascript
const photoPath = 'assets/images/appu-professional.jpg';
```

Change to your file name:
```javascript
const photoPath = 'assets/images/YOUR-FILE-NAME.jpg';
```

---

**Your professional photo with the AI/ML dashboards will look amazing on the portfolio!** 🎨✨
