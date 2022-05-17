import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, Moon } from 'tabler-icons-react';

function LightAndDarkModeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="default"
      color={dark ? 'white' : 'grey'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? (
        <Sun style={{ width: 28, height: 28 }} />
      ) : (
        <Moon style={{ width: 28, height: 28 }} />
      )}
    </ActionIcon>
  );
}
export default LightAndDarkModeButton;