import { Card, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ActionButton } from './ActionButton';

export const ContractDashboard = () => {
  const router = useRouter();

  const handlePreview = () => {
    console.log('sign')
  };

  return (
    <Card sx={{ borderRadius: "1rem" }}>
      <Stack direction="column" p={3} spacing={2}>
        <Typography variant='h4'>
          Title
        </Typography>
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam cum harum libero perspiciatis reprehenderit? Architecto alias inventore, amet minima enim quasi, voluptas at deleniti ea possimus aperiam! Eos, nostrum possimus.
        </Typography>
        {/* Add your general data, totals, id, and name here */}
        <Stack direction="row" spacing={2}>

          <ActionButton onClick={() => handlePreview()}>
            sign
          </ActionButton>
        </Stack>
      </Stack>
    </Card>
  );
};

