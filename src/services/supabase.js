import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://laiilirijlyoodovajpo.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhaWlsaXJpamx5b29kb3ZhanBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyOTcwMzcsImV4cCI6MjA5MDg3MzAzN30.E9mqBfQ-K_ZpfG6ow2qpMPQgnSbcCiibBkur-YbRErk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
