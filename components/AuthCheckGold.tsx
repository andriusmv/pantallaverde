import Link from 'next/link';
import { Button } from '@mantine/core'
import { useUser } from '@/utils/useUser';

const AuthCheckGold = (props: { children: any; fallback: null; }) => {
    const { user } = useUser();

    return user ? props.children : props.fallback || <Link href="/pro">
      <Button>This content is exclusive to Gold Members only 🔒
        </Button>
        </Link>;
}
    
    export default AuthCheckGold;