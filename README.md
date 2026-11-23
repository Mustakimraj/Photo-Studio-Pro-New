# Photo Studio Pro — Web Edition

A local-first web starter for a photo studio and computer shop workflow. It is designed to be hosted as a static site on GitHub Pages and opened in a modern browser.

## Included and working in this release

- Bangla / English interface toggle
- Light / Dark theme
- Multi-image upload and image selection
- Local image preview and processing using Canvas
- Crop by source-pixel X, Y, Width and Height
- Brightness, contrast and saturation
- Solid background color fill behind transparent images
- Rotate, horizontal flip, undo and redo
- JPG / PNG export
- Print sheet layout for A4, A5, Letter, 4R, 5R, 6R and 8R
- Passport photo export preset (1.5 × 1.9 inches at 300 px/in) and stamp preset
- Copy count, gap, cut lines and border options
- Personal service price list
- Work entries with quantity × unit price calculation
- Historical entries retain the price used at the time
- Monthly income / quantity summary and CSV export
- JSON backup and restore for service and work records

## Important limitations — not implemented in this release

This is **not yet the complete master-plan software**. The following require additional implementation, backend services, AI providers, or hardware/browser integration:

- Secure phone-number/password login, admin approvals, password reset and centralized multi-user database
- Admin dashboard, user activity log, user permissions and cross-device sync
- AI background removal, AI enhancement, old-photo restoration, colorization, face detection and retouching
- AI background removal and advanced background editing
- PDF merge/split/compress/rotate and PDF-to-image tools
- Physical scanner hardware integration
- CV builder, Bangla phonetic typing, application templates and government form integrations
- Graphic design editor, QR and barcode generation
- Customer management, receipts, dues, expenses and profit/loss reports
- Printer-driver profiles, ink-cost estimation and native printer management
- Automatic background backup and native arbitrary-folder access

No inactive feature is presented as working. The current release is a usable first phase, not a fake demo of all planned modules.

## Data and privacy

- Service prices and work entries are stored in this browser's `localStorage`.
- Data is local to the current browser profile and device. It does not sync between devices or users.
- Clearing browser site data can delete records. Download JSON backups regularly.
- Uploaded images are processed in the browser and are not uploaded to a server by this app.
- Backup files include service prices, work entries and settings, but **not uploaded image files**.
- Do not use this local-only build to store sensitive NID, birth registration, passwords or other confidential customer information.

## Run locally

Because the JavaScript uses ES modules, do not open `index.html` directly as a `file://` URL. Run a local static server instead.

### Easy option (Python installed)

1. Extract the ZIP.
2. Open the extracted project folder.
3. In the folder address bar, type `cmd` and press Enter.
4. Run:

   ```bash
   py -m http.server 8000
   ```

5. Open `http://localhost:8000` in Firefox or Chrome.

If `py` is unavailable, try `python -m http.server 8000`.

## Publish on GitHub Pages

1. Open your repository: `https://github.com/Mustakimraj/Photo-Studio-Pro-New`
2. Remove the old placeholder `index.html` and upload the files/folders from this ZIP to the repository root.
3. Keep `index.html` at the repository root. Do not upload the containing ZIP folder itself.
4. Commit the changes to the `main` branch.
5. In Settings → Pages, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
6. Wait for the deployment and open:

   `https://mustakimraj.github.io/Photo-Studio-Pro-New/`

## Print notes

- The layout canvas is generated at 150 pixels per inch for browser printing. This is a practical raster preview, not a guaranteed calibrated 300-DPI print master.
- In the browser print dialog, select the matching paper size, disable browser headers/footers, and choose 100% / Actual size where available.
- Printer margins and borderless printing depend on the printer driver.
- Passport preset is 1.5 × 1.9 inches. Confirm the physical output with a ruler before producing customer orders.

## Project structure

```text
Photo-Studio-Pro-Web/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── image-editor.js
│   ├── i18n.js
│   └── storage.js
├── docs/
│   └── NEXT_PHASE.md
└── README.md
```

## Next phase

Read `docs/NEXT_PHASE.md` before adding secure accounts and backend features.
