import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yylnyvmfwqqvypsnycxv.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5bG55dm1md3Fxdnlwc255Y3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxODAyMjMsImV4cCI6MTk5Mjc1NjIyM30.cjwkeQNVpJXLxuJ8r5_qPbd0mrKSKT0lRHLK7CIgM9o'

export const supabase = createClient(supabaseUrl, supabaseKey)

console.log('Conexion a supabase', supabase)