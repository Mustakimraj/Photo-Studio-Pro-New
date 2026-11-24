# বাস্তবায়ন অবস্থা — Photo Studio Pro Free AI Web

## এই ZIP-এ কার্যকর
- একাধিক ছবি আপলোড ও ছবি পরিবর্তন
- ড্র্যাগ করে Crop এবং X/Y/Width/Height দিয়ে Crop
- Rotate, Flip, Undo, Redo, Reset
- Brightness, Contrast, Saturation, Basic Sharpening
- Transformers.js ও Swin2SR model দিয়ে ফ্রি AI 2× Upscale/Super-resolution
- IMG.LY-এর AGPL-3.0 লাইসেন্সযুক্ত ফ্রি in-browser AI Background Remove
- ব্যাকগ্রাউন্ডে রং বসানো এবং PNG transparency export
- JPG/PNG download
- Passport 1.5 × 1.9 inch, Stamp, Custom, A4/A5/Letter/4R/5R/6R/8R print layout
- কপি সংখ্যা, gap, cut line এবং নির্বাচিত DPI-তে raster sheet
- Image to PDF, PDF Merge, PDF Rotate
- QR code এবং সাধারণ Visiting Card canvas
- নিজের Service Price, Quantity × Price Work Entry, Paid/Due, Customer, Expense
- CSV export, JSON backup/restore, Light/Dark, responsive UI

## এখনো তৈরি হয়নি
- Secure multi-user login, Admin approval, permission, password reset, activity log
- কেন্দ্রীয় Database, cross-device sync, cloud backup
- Old photo restoration/colorization, face detection/retouch (AI 2× upscale আছে; হারানো ডিটেইল নিশ্চিতভাবে ফিরিয়ে আনে না)
- Scanner hardware integration, PDF split/compress, document cleanup
- পূর্ণ CV/Application builder, Bangla phonetic typing, পূর্ণ Graphic Design suite, Barcode
- Advanced billing/receipt, SMS/WhatsApp, printer driver integration ও প্রকৃত ink cost measurement

## কেন Login এখন নেই?
GitHub Pages static hosting-এ server-side authentication বা private database নেই। শুধু browser JavaScript-এ password রাখলে তা নিরাপদ হয় না। Secure user/admin system-এর জন্য আলাদা backend এবং database deploy করতে হবে।


## এই আপডেটে যুক্ত হয়েছে
- Browser camera scanner: capture, grayscale/threshold cleanup, JPG এবং এক পৃষ্ঠার PDF export।
- PDF page extraction (1,3-5 format) এবং lossless rewrite/optimization attempt।
- CV/Resume ও আবেদনপত্রের basic form, preview এবং browser print/Save as PDF।
- Visiting card, banner, poster, Facebook cover, ID card ও custom canvas template।
- CODE128/EAN13/UPC/CODE39 barcode generator ও SVG export।
- Local shop profile এবং sample receipt print।

## এখনো Backend/উন্নত বাস্তবায়ন প্রয়োজন
Secure multi-user login, admin approval, cross-device sync, full scanner-driver integration, OCR, advanced old-photo restoration/colorization, face retouch, SMS/WhatsApp, full layered design editor, cloud backup।
