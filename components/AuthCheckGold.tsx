import Link from 'next/link';
import { Button } from '@mantine/core'
import { useUser } from '@/utils/useUser';
import { supabase } from '@/utils/supabase-client';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';

const AuthCheckGold = (props: { children: any; fallback: any; }) => {
  const { user } = useUser();

  return user ? props.children : props.fallback || <Link href="/signin"><Button>You must be logged in 🔒</Button></Link>;
}
  supabaseClient.auth.api.getUserById.name
  
  export default AuthCheckGold;
    