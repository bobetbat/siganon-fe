import { List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import { ActionButton } from './ActionButton';

export const Contracts = () => {
  const router = useRouter();

  const handlePreview = (id: string) => {
    router.push(`/contract/${id}`);
  };

  return (
    <List>
      {['Contract 1', 'Contract 2', 'Contract 3'].map((contract, index) => (
        <ListItem key={index}>
          <ListItemText primary={contract} secondary="Address" />
          <ListItemText primary={'status'} />
          <ActionButton onClick={() => handlePreview(contract)}>Preview</ActionButton>
        </ListItem>
      ))}
    </List>
  );
};

