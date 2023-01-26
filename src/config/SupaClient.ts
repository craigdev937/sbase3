import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
const supabaseKey = process.env.REACT_APPpSUPABASE_ANON_KEY || "";

export const sBase = createClient(supabaseUrl, supabaseKey);


