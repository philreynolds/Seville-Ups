/**
 * Composable for Supabase client access
 * @returns Supabase client instance
 */
export const useSupabase = () => {
  const client = useSupabaseClient()
  const user = useSupabaseUser()

  return {
    client,
    user,
    auth: client.auth
  }
}