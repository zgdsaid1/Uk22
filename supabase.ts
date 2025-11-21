// Supabase client configuration
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://rhzqtylbhlipltjlasra.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoenF0eWxiaGxpcGx0amxhc3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2MzY0ODMsImV4cCI6MjA3OTIxMjQ4M30.ypgNX3jAoKeJ4nLPMgaKbisF8TAINa3MKXl4nH08Q3I"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
