# Photo Studio Pro — Free AI Web Edition

A browser-first, static web app for photo editing, print sheets and basic computer-shop records.

## Important truth about this release

This ZIP is a **working local-first foundation**, not the entire master-plan product. It includes working client-side tools listed below. It does **not** pretend that static GitHub Pages can provide secure multi-user accounts, admin approvals or central sync. Those require a separately hosted backend and database.

## Working features in this release

- Multi-image upload and image switching
- Crop by dragging a selection or entering exact source-pixel X/Y/width/height
- Rotate, horizontal flip, undo, redo and reset
- Brightness, contrast, saturation and basic sharpening (canvas processing)
- Free in-browser AI 2× super-resolution using Transformers.js + Swin2SR model (first use downloads a large model; needs RAM and internet)
- Free in-browser AI background removal using `@imgly/background-removal` (first use downloads the model; internet required; local inference after download)
- Background color compositing and transparent PNG export
- PNG/JPG download
- Print sheet layout with Passport 1.5 × 1.9 in, Stamp, custom dimensions, A4/A5/Letter/4R/5R/6R/8R, copy count, gaps, cut lines and selected DPI raster output
- Image-to-PDF, PDF merge and PDF rotation (PDF library loaded from CDN)
- QR generator (library loaded from CDN)
- Simple visiting-card canvas template
- Camera-based document capture using browser camera permission, grayscale/threshold cleanup, JPG and single-page PDF export
- PDF page extraction by page ranges and lossless PDF rewrite/optimization attempt
- CV/resume form and application/darখাস্ত generator with browser print / Save as PDF
- Canvas-based templates for visiting card, banner, poster, Facebook cover, ID card and custom sizes
- Barcode generation (CODE128, EAN13, UPC, CODE39) and SVG download/print
- Local shop display profile and printable sample receipt
- Personal service price list, quantity × price work entries, paid/due calculation, customer list and expense list
- CSV work export, JSON backup/restore, dark/light theme, responsive layout and basic service-worker cache

## Not included / requires a later backend or separate implementation

- Secure phone + password login, admin approval, password reset, audit log and user permissions
- Multi-user accounts with private data isolation and cross-device synchronization
- True old-photo restoration/colorization, face detection/retouching (AI 2× super-resolution is included; it is not guaranteed to restore missing details)
- Flatbed scanner driver integration and automatic multi-page scanner feeder workflow. Camera capture is included. PDF compression is a lossless rewrite attempt, not guaranteed to shrink scanned PDFs.
- Advanced CV designer with photo upload/signature, phonetic Bangla keyboard, layered full graphic editor. Current CV/application and graphic templates are basic editable forms/canvas templates; barcode generator is included.
- Automatic SMS/WhatsApp reminders, printer-driver controls and exact ink-cost measurement
- Cloud/automatic backup and restore

Do not store NID, birth-registration, passwords or other sensitive customer information in this local-only release.

## Run locally on Windows

1. Extract the ZIP.
2. Open the extracted folder in File Explorer.
3. Click the address bar, type `cmd`, press Enter.
4. Run `py -m http.server 8000`.
5. Open `http://localhost:8000` in Firefox or Chrome.
6. Keep the command window open while using the app.

Do not open `index.html` directly with `file://`; ES modules, model loading and service workers need an HTTP(S) origin.

## Publish to GitHub Pages

1. Extract this ZIP.
2. Open the repository root on GitHub.
3. Upload the **contents** of the extracted folder (not the containing folder).
4. Ensure `index.html` is in the repository root.
5. Commit changes and wait for Pages deployment.
6. Open the Pages URL and hard refresh (`Ctrl + Shift + R`).

## Free AI background removal

- The UI dynamically imports `@imgly/background-removal` from `esm.sh` and runs the model in the browser.
- First use needs an internet connection and downloads the JavaScript/WASM/model assets. Browser cache may retain them for later use; this is not guaranteed if browser storage is cleared.
- Large images and low-memory computers may process slowly or fail. Try a smaller image if needed.
- This dependency is licensed under **AGPL-3.0**. Review the license and source-distribution obligations before publicly operating or distributing a modified service. “Free” does not mean unrestricted proprietary/commercial licensing.
- This feature is not a paid API and uploaded photos are processed in the browser by this library, not sent to a Photo Studio Pro server.

## Storage and privacy

- Records are stored in this browser's `localStorage` only. They do not sync to another browser, PC or user.
- Browser data can be cleared. Download JSON backups regularly.
- Images are kept in the active page memory; they are not automatically stored as customer files.
- The service worker caches the app shell only. AI models and external libraries may still need network access.

## Additional release notes

- This release includes more usable local browser modules, but it is still not the complete master-plan product. Test camera/PDF/AI on the target browser and PC before using for customer orders.
- AI Background Removal uses the IMG.LY package under AGPL-3.0. Review license obligations before commercial distribution.
- PDF, barcode and AI dependencies load from public CDNs; those tools need internet on first load and may fail if the CDN is blocked.
- Basic graphic templates and CV/application templates are not a full Photoshop/Canva replacement.

## Technical notes

- Static HTML/CSS/JavaScript; no build step required.
- PDF: `pdf-lib` from jsDelivr at runtime.
- QR: QRCode.js from cdnjs at runtime.
- AI background removal: `@imgly/background-removal` 1.7.0 via esm.sh at runtime.
- AI 2× super-resolution: Transformers.js 3.7.2 with `Xenova/swin2SR-classical-sr-x2-64` from Hugging Face at runtime.
- Print sheet is rendered as a raster canvas at the selected pixel density. Browser/printer scaling and hardware margins can affect physical output. Verify with a ruler before customer production; this is not a printer calibration system.

## Basic test checklist

- Upload two images; switch between thumbnails.
- Crop by drag and by numeric coordinates; test Undo/Redo.
- Rotate/flip/reset; export PNG and JPG.
- Run AI background removal while online; export transparent PNG.
- Create Passport print layout; check the physical dimensions using a ruler.
- Add a service at ৳10, enter quantity 30, confirm total ৳300.
- Add a customer and expense; export CSV and JSON backup; restore backup.
- Test PDF/QR tools while online.
