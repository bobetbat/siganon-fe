import { Divider, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import { ActionButton } from './ActionButton';

const mocks = ['Contract 1', 'Contract 2', 'Contract 3']

export const Contracts = () => {
  const router = useRouter();

  const handlePreview = (id: string) => {
    router.push(`/contract/${id}`);
  };

  return (
    <List>
      {mocks.map((contract, index) => (
        <>
          <ListItem key={index}>
            <ListItemText primary={contract} secondary="Address" />
            <ListItemText primary={'status'} />
            <ActionButton onClick={() => handlePreview(contract)}>Preview</ActionButton>
          </ListItem>
          {index !== mocks.length - 1 ? <Divider variant="middle" component="li" /> : null}
        </>
      ))}
    </List>
  );
};

