-- Supabase schema starter; review before production.
create table if not exists public.profiles(id uuid primary key references auth.users(id) on delete cascade, phone text unique, display_name text default '', role text default 'user' check(role in ('admin','user')), approved boolean default false, disabled boolean default false, created_at timestamptz default now());
create table if not exists public.services(id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, name text not null, unit text not null, price numeric(12,2) not null check(price>=0));
create table if not exists public.work_entries(id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, service_name_snapshot text not null, unit_price_snapshot numeric(12,2) not null, quantity numeric(12,2) not null, total numeric(12,2) not null, paid numeric(12,2) not null default 0, work_date date not null default current_date);
create table if not exists public.customers(id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, name text not null, phone text, note text);
create table if not exists public.expenses(id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, title text not null, amount numeric(12,2) not null, expense_date date not null default current_date);
alter table public.profiles enable row level security; alter table public.services enable row level security; alter table public.work_entries enable row level security; alter table public.customers enable row level security; alter table public.expenses enable row level security;
create policy "profile own read" on public.profiles for select using(id=auth.uid());
create policy "services own" on public.services for all using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy "works own" on public.work_entries for all using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy "customers own" on public.customers for all using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy "expenses own" on public.expenses for all using(user_id=auth.uid()) with check(user_id=auth.uid());
-- Admin policies and invite-only account provisioning require trusted Edge Functions/server logic.
-- Never expose Supabase service_role key in frontend. Never store or reveal plaintext passwords.
