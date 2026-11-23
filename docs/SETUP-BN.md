# Photo Studio Pro Web — বাংলা সেটআপ

## GitHub Pages
1. ZIP Extract করুন।
2. Extract করা ফোল্ডারের ভেতরের সব ফাইল/ফোল্ডার GitHub repository root-এ upload করুন; বাইরের folder upload করবেন না।
3. পুরোনো একই নামের ফাইল replace করুন, Commit changes দিন।
4. Settings > Pages > Deploy from a branch > main > /(root) > Save।
5. Deploy শেষ হলে Pages URL খুলুন; Firefox-এ Ctrl+Shift+R দিন।

## লোকাল রান
Python থাকলে ফোল্ডারের address bar-এ cmd লিখে:
`python -m http.server 8000`
তারপর http://localhost:8000 খুলুন।

## এই build-এ কাজ করে
- এক/একাধিক ছবি upload, brightness/contrast/saturation, crop selection, rotate/flip, JPG/PNG export
- Passport 1.5×1.9 ও stamp ratio crop preset এখনো manual crop workflow-এ ব্যবহার করতে হবে; print preset রয়েছে
- A4/A5/Letter/4R-8R print sheet, copy count, gap, print/download
- নিজস্ব service price, quantity × rate, historical rate snapshot, কাজের হিসাব, customer, expense, CSV, JSON backup/restore
- Images-to-PDF (অনলাইন pdf-lib প্রয়োজন), QR generator (CDN/ইন্টারনেট প্রয়োজন)

## এখনও production-ready নয়
Secure phone/password login, invite-only user approval, admin panel, central multi-user sync, AI background removal/enhancement/restoration, face tools, full PDF merge/split/compress, scanner, CV/application builder, Bangla phonetic keyboard, graphic design editor, barcode, SMS/WhatsApp, calibrated 300 DPI, auto cloud backup। GitHub Pages static hosting একা এগুলো দিতে পারে না।

## Secure multi-user backend
Supabase project তৈরি করে `backend/schema.sql` চালান। এই SQL শুধু প্রাথমিক own-user RLS foundation; পূর্ণ admin approval/invite flow-এর জন্য trusted Edge Function/server-side code, policies audit ও security test লাগবে। Frontend-এ service_role key দেবেন না। Admin-ও user password দেখতে পারবে না, শুধু reset করতে পারবে। বর্তমান UI Supabase Auth-এ এখনো wired নয়।

## Data সতর্কতা
Local data এই browser-এর LocalStorage-এ থাকে; browser data clear হলে হারাতে পারে। নিয়মিত JSON backup রাখুন। Sensitive NID/password তথ্য সংরক্ষণ করবেন না। Print output 150 PPI preview; 300 DPI calibrated guarantee নয়।
