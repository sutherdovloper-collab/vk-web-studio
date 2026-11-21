/*
# Create contact_messages table (single-tenant, no auth)

1. Plain-English explanation
- Adds a table to store messages submitted through the VK WEB STUDIO portfolio contact form.
- No sign-in exists in this app, so anyone (anonymous visitors) may submit a message.
- Messages are write-only for the public: visitors can create messages but never read, edit, or delete them.

2. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) - sender's name from the form
  - `email` (text, not null) - sender's email from the form
  - `message` (text, not null) - the message body
  - `created_at` (timestamptz, defaults to now)

3. Security
- Enable RLS on `contact_messages`.
- Grant INSERT to `anon` and `authenticated` so the public form can write.
- Insert-only policy: no SELECT, UPDATE, or DELETE policies, so submissions stay private.

4. Notes
- The studio owner reads messages via direct database access; the public can never read them back.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
