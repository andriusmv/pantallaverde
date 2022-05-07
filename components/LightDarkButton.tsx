import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, Moon } from 'tabler-icons-react';

function LightAndDarkModeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? (
        <Sun style={{ width: 18, height: 18 }} />
      ) : (
        <Moon style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
  );
}
export default LightAndDarkModeButton;