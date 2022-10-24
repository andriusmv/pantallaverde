import Link from 'next/link';
import { Popover, Stack, ActionIcon, Text, Group } from '@mantine/core';
import { Settings, User } from 'tabler-icons-react';
import LightAndDarkModeButton from '@/components/LightDarkButton';


export default function Configuration() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
      <ActionIcon component="a" variant="subtle" color="dark">
      <Settings size="md" />
      </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown sx={(theme) => ({ background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white })}>
      <Stack>
    <Group>
      <Link href="/account" passHref>
      <ActionIcon component="a" variant="default">
      <User size="md" />
      </ActionIcon>
    </Link><Text>Mi cuenta</Text>
    </Group>
    <Group>
      <ActionIcon component="a">
      <LightAndDarkModeButton />
      </ActionIcon><Text>Prender las luces</Text>
    </Group>
      </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}