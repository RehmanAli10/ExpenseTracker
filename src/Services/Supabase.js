import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
const supabaseUrl = 'https://dzqqmbyctuzamasiumor.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6cXFtYnljdHV6YW1hc2l1bW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwODM0MzMsImV4cCI6MjAyNTY1OTQzM30.uNzcsY9ijDpLOF7oV87vUrj8od_ztFA6NtttqEylMz4';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
