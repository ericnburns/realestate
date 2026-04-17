/*
  # Create Leads Table

  ## Purpose
  Stores contact form submissions from website visitors who want to get in touch with the real estate team.

  ## New Tables
  - `leads`
    - `id` (uuid, primary key) — unique identifier for each lead
    - `name` (text, not null) — full name of the visitor
    - `email` (text, not null) — email address
    - `phone` (text, optional) — phone number
    - `message` (text, optional) — their message or question
    - `created_at` (timestamptz) — when the lead was submitted

  ## Security
  - RLS enabled on `leads` table
  - INSERT policy: anyone (anonymous or authenticated) can submit a lead
  - SELECT/UPDATE/DELETE: only authenticated users (team members) can read/manage leads
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete leads"
  ON leads
  FOR DELETE
  TO authenticated
  USING (true);
