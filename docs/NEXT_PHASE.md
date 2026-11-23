# Next Phase: secure multi-user architecture

GitHub Pages is static hosting. It must never contain a shared administrator password, user password list, service-role key, or private API key.

For the requested production system, connect a managed backend such as Supabase (or an equivalent trusted backend) with:

- Phone number authentication and verified account flow
- Admin invitation / approval workflow
- Password hashing and reset handled by the authentication provider
- PostgreSQL tables for profiles, user_services, work_entries, customers, payments, expenses and activity events
- Row Level Security (RLS): a user may read/write only their own records; admins receive only explicitly granted administrative access
- Server-side authorization for all privileged actions
- Audit logs that record login time, last activity and administrative changes without ever recording plaintext passwords
- Storage policies for customer files and user-selected backup workflows

Never store or display users' plaintext passwords to the administrator. A secure system can show account status, phone number, login timestamps and allow an admin-authorized password reset, but it must not reveal the password itself.

Before deploying a production backend, configure RLS policies and test them using separate user accounts. Do not put a backend service-role key in GitHub Pages frontend code.

Additional modules should be implemented in separate tested phases: PDF tools, scanner integration, CV and application templates, design editor, QR/barcode, customer and billing, expense reports, AI image services, and cross-device backup/sync.
