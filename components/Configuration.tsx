import { NextLink } from '@mantine/next';
import { Popover, Stack, ActionIcon, Text, Group, Menu, Button } from '@mantine/core';
import { ArrowsLeftRight, Bulb, Photo, Search, Settings, Trash, User } from 'tabler-icons-react';
import LightAndDarkModeButton from '@/components/LightDarkButton';


export default function Configuration() {
  return (
    <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <Button leftIcon={<Settings size={25} strokeWidth={2} />} variant="subtle" color="dark" style={{ fontSize:20}} />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Opciones</Menu.Label>
        <Menu.Item icon={<User size={25} />} component={NextLink} href="/account">Mi cuenta</Menu.Item>
        <Menu.Item icon={<Settings size={25} />} component={NextLink} href="/ajustes">Ajustes</Menu.Item>
        <Menu.Item icon={<Search size={25} />} rightSection={<Text size="xs" color="dimmed">Ctrl+K</Text>}>Buscar</Menu.Item>
        <Menu.Divider />

        <Menu.Label>Cuidado</Menu.Label>
        <Menu.Item icon={<ArrowsLeftRight size={25} />}>Descargar mis datos</Menu.Item>
        <Menu.Item color="red" icon={<Trash size={25} />}>Eliminar mi cuenta</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}