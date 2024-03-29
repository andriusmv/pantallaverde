import { Text, Menu, Button } from '@mantine/core';
import { ArrowsLeftRight, Search, Settings, Trash, User, Menu2 } from 'tabler-icons-react';
import Link from 'next/link';

export default function Configuration() {

  
  return (
<>

        
    <Menu shadow="md" width={200} trigger="hover" withArrow position="left-start" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <Button variant="subtle" color="dark" style={{ fontSize:20}}><Menu2 size={25} strokeWidth={2} /></Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Opciones</Menu.Label>
        <Menu.Item icon={<User size={25} />}><Link href="/account" style={{ textDecoration: 'none' }}>
        <Text color="dimmed">Mi cuenta</Text></Link></Menu.Item>
        <Menu.Item icon={<Settings size={25} />}><Link href="/ajustes" style={{ textDecoration: 'none' }}>
        <Text color="dimmed">Ajustes</Text></Link></Menu.Item>
      </Menu.Dropdown>
    </Menu>
      
    </>
  );
}