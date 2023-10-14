import { Stack } from '@mui/material';
import theme from '../styles/theme';
import { Subtitle, Title } from './Typography';

export const Blocks: React.FC<{ reverse?: boolean; title: React.ReactNode; subtitle: React.ReactNode; children?: React.ReactNode }> = ({ reverse, title, subtitle, children }) => {
  const mainColor = theme.palette.primary.main
  const secondaryColor = theme.palette.secondary.main
  return (
    <Stack direction="column" alignItems="center" p={7} spacing={5} width="100vw" height="85vh" sx={{ bgcolor: reverse ? secondaryColor : mainColor }}>
      <Title color={!reverse ? secondaryColor : mainColor}>{title}</Title><>
        <Subtitle color={!reverse ? secondaryColor : mainColor}>
          {subtitle}
        </Subtitle>
      </>
      {children}
    </Stack>
  );
};

