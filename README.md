# Clear Path Investment Advice Website

This repository contains the source code for the Clear Path Investment Advice website.

## Deployment Instructions (Vercel)

1. Ensure all project files are in a GitHub repository.
2. Sign up for a Vercel account at https://vercel.com/.
3. Connect your GitHub account to Vercel.
4. In the Vercel dashboard, click "Import Project" and select your GitHub repository.
5. Keep the default settings and click "Deploy".
6. Once deployed, Vercel will provide a URL for your live site.

For more detailed instructions, refer to the Vercel documentation.

## Updating Content

- To update the main content, edit the `index.html` file.
- To modify styles, edit the `styles.css` file.
- To change animations or add interactivity, edit the `script.js` file.
- After pushing changes to GitHub, Vercel will automatically redeploy your site.

## GHL Calendar Integration

To integrate the GHL calendar:

1. Open `script.js`
2. Locate the `openGHLCalendar()` function
3. Replace the `alert()` call with the following line:
   ```javascript
   window.open('YOUR_GHL_CALENDAR_LINK', '_blank');
   ```
4. Replace `'YOUR_GHL_CALENDAR_LINK'` with the actual GHL calendar link.
5. Commit and push these changes to GitHub, and Vercel will automatically redeploy your site with the updated calendar link.

## Contact

For any questions or support, please contact [Your Contact Information].# clearpath
Website Files for Sarb’s new website 
