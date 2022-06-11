import Link from 'next/link';
import { Button } from '@mantine/core'
import { useUser } from '@/utils/useUser';
import { supabase } from '@/utils/supabase-client';

async function AuthCheckGold() {
let { data: subscriptions, error } = await supabase
  .from('subscriptions')
  .select('status')
  

    return subscriptions = 'active' ? <Button>Welcome</Button> : <Link href="/pro">
      <Button>This content is exclusive to Gold Members only 🔒
        </Button>
        </Link>
}
    