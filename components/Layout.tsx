import { Stack } from '@mui/material';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { useAccount } from 'wagmi';
import theme from '../styles/theme';

type Props = {
  children: ReactNode;
  footer?: boolean;
  header?: boolean;
  px?: boolean
  py?: boolean
};

export const Layout: React.FC<Props> = ({ children, footer, header, px, py }) => {
  const { isConnected } = useAccount()
  return (
    <>
      <main>
        {header && <Header />}
        <Stack
          sx={{
            minHeight: '100vh',
            width: '100vw',
            mt: '64px',
            mb: '6vh',
            py: py ? { xs: 3, md: 5, lg: 6 } : {},
            px: px ? { xs: 2, sm: 5, md: 10, lg: 20 } : {},
            gap: 4,
            bgcolor: theme.palette.secondary.main
          }}
        >
          {children}
          {/* {isConnected ? children :  <Card sx={{ alignSelf: "center", maxWidth: '80vw', marginTop: "30vh", p: "16px", backgroundColor: "#f0f0f0" }}>
            <Typography>
             Connect wallet
            </Typography>
          </Card>} */}
        </Stack>
      </main>

      {footer && <Footer />}
    </>
  );
}
