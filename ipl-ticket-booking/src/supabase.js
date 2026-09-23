import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dwxtsadmimspqbglehqw.supabase.co";
const supabaseKey = "sb_publishable_ABLMVh-dJcy4B3Gf4of-Xg_DfLlknyL";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
