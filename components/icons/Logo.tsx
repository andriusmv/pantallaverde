import Link from 'next/link';
import { useMantineTheme, Button } from '@mantine/core';
import { Cast } from 'tabler-icons-react';

export function Logo() {
  const theme = useMantineTheme();

  return (
    <>
      <Link href="/">
        <Button leftIcon={<Cast size={25} strokeWidth={3} />} variant="subtle" color="dark" style={{ fontSize:20}}>
          PANTALLA VERDE</Button>
      </Link>
    </>
  );
}

export function LogoSmall() {
  const theme = useMantineTheme();

  return (
    <>
    <Link href="/">
        <Button leftIcon={<Cast size={25} strokeWidth={3} />} variant="subtle" color="dark" style={{ fontSize:15}}>
          PANTALLA<br/>VERDE</Button>
        </Link>
    </>
  );
}

export default Logo;