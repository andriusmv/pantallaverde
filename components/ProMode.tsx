import React from 'react';
import { Group, Button, Anchor } from '@mantine/core';
import Link from 'next/link';

export default function ProMode() {

  return (
    <Group position="center">
        <Anchor href="/pro">
      <Button size="md" compact variant="outline" color="teal">Hacerse Pro</Button></Anchor>
    </Group>
  );
}
