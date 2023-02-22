import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { CurrencyDollar, CurrencyEuro } from 'tabler-icons-react';

function CurrencyButton() {
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
        <CurrencyDollar style={{ width: 28, height: 28 }} />
      ) : (
        <CurrencyEuro style={{ width: 28, height: 28 }} />
      )}
    </ActionIcon>
  );
}
export default CurrencyButton;