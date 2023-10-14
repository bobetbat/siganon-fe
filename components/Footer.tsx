import * as React from 'react';
import { Stack,Box ,Toolbar } from '@mui/material';
import theme from '../styles/theme';

export const Footer: React.FC = () => {

  return (
    <footer>
      <Stack sx={{ bottom: 1, bgcolor:theme.palette.primary.main, justifySelf: 'flex-end' }}>
        <Box maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' }
            }}>

            </Box>
          </Toolbar>
        </Box>
      </Stack>
    </footer>
  );
};
