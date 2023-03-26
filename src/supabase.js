import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lzdmdxhtnmuvawqvpyan.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6ZG1keGh0bm11dmF3cXZweWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2NTc4MTIsImV4cCI6MTk5NTIzMzgxMn0.rV0qC3mcwrRaZik10wr_DKcfDdZ7WyYKzxAGrV63yDc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
