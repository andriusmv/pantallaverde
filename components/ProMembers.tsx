import { Subscription } from 'types';
import Link from 'next/link';
import { Button } from '@mantine/core'
import { useUser } from '@/utils/useUser';

const ProMembers = (props: { children: any; fallback: any; }) => {
    const { Subscription:user_id } = Subscription();

    return user_id ? props.children : props.fallback || <Link href="/signin"><Button>Debes iniciar sesión</Button></Link>;
}
    
    export default ProMembers;
