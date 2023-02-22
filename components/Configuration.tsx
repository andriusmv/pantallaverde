import { NextLink } from '@mantine/next';
import { Text, Menu, Button } from '@mantine/core';
import { ArrowsLeftRight, Search, Settings, Trash, User, Menu2 } from 'tabler-icons-react';

export default function Configuration() {

  
  return (
<>

        
    <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <Button variant="subtle" color="dark" style={{ fontSize:20}}><Menu2 size={25} strokeWidth={2} /></Button>
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
      
    </>
  );
}