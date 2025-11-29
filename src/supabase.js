import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://spxjedwzbldwhrqfwfek.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNweGplZHd6Ymxkd2hycWZ3ZmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0MDE1ODcsImV4cCI6MjA3OTk3NzU4N30.21FVd4tltcZMAuf4CsdKSjyuFOszCf1vOwcDEDN7qUw");

export async function saveContact(data) {
  const { error } = await supabase
    .from("contacts")
    .insert([
      {
        full_name: data.full_name,
        email: data.email,
        phone_number: data.phone_number,
        notes: data.notes,
      }
    ]);

  return { error };
}

export async function getContacts() {
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  return { data, error };
}