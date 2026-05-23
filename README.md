# HyperZoom - Hosting Preparation

To prepare this project for cPanel Node.js hosting:

### 1. Build and Prepare
Run the following command to generate the build and copy all necessary files into the `host` folder:

```powershell
npm run build; npm run host-prep
```

### 2. Upload
1.  Zip the contents of the `host` folder.
2.  Upload and extract the zip to your cPanel application root.
3.  Set the **Application startup file** in cPanel to `server.js`.
4.  Set the **Node.js version** to 20 or higher.

### 3. Folder Structure in cPanel
Your cPanel folder should look like this:
- `.next/`
- `node_modules/`
- `public/`
- `package.json`
- `server.js`
