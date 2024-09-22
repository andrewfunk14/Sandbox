// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://psyworoeukjtxlyfrujc.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzeXdvcm9ldWtqdHhseWZydWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4MTA4NDIsImV4cCI6MjA0MjM4Njg0Mn0.4bfpt8injL5w9CqOZTQNCNMuHVkTy54nUxXMmcac63E';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
