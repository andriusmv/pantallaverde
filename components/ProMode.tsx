import React from 'react';
import { Group, Button, Anchor } from '@mantine/core';
import Link from 'next/link';

export default function ProMode() {

  return (
    <Group position="center">
        <Anchor href="/pro">
      <Button variant="default">Upgrade ⭐</Button></Anchor>
    </Group>
  );
}
