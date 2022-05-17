import Link from 'next/link';
import { Button } from '@mantine/core'
import { useUser } from '@/utils/useUser';

const AuthCheckSilver = (props: { children: any; fallback: null; }) => {
    const { user } = useUser();

    return user ? props.children : props.fallback || <Link href="/pro">
      <Button>This content is exclusive to Silver Members only 🔒
        </Button>
        </Link>;
}
    
    export default AuthCheckSilver;