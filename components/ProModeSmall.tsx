import Link from 'next/link';
import { Group, Button } from '@mantine/core';

export default function ProModeSmall() {

  return (
    <Group position="center">
        <Link href="/pro">
      <Button size="md" compact variant="outline" color="teal">Pro</Button></Link>
    </Group>
  );
}
