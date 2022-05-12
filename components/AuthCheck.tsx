import Link from 'next/link';
import { Button } from '@mantine/core'
import { useUser } from '@/utils/useUser';

const AuthCheck = (props: { children: any; fallback: any; }) => {
    const { user } = useUser();

    return user ? props.children : props.fallback || <Link href="/signin"><Button>Debes iniciar sesión</Button></Link>;
}
    
    export default AuthCheck;
