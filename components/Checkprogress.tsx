import { useState } from 'react';
import { Checkbox } from '@mantine/core';

export default function Checkprogress() {
  const [checked, setChecked] = useState(false);
  
  return (
    
    <Checkbox size="md" color="theme" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} 
    label="Marcar como completado 👍" />
    
  );
}