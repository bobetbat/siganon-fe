import * as React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import { Button, Stack,AppBar ,Toolbar,Box} from '@mui/material';

export const Header: React.FC = () => {
  const router = useRouter();
  return (
    <AppBar>
      <Box maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'space-between', px: '1rem', py: '0.5rem' }}
        >
          <Button onClick={() => router.push('/')}>
          </Button>
          <Stack direction='row' gap={2}>
            <ConnectButton />
          </Stack>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
