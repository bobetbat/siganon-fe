import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Title =styled(Typography)(({ theme, color }) => ({
  color: color || theme.palette.text.primary,
  textAlign: 'center',
  fontFamily: 'Helvetica Neue',
  fontSize: '50.859px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '80px',
  letterSpacing: '1px',
}));

export const Subtitle =styled(Typography)(({ theme, color }) => ({
  color: color || theme.palette.text.primary,
  textAlign: 'center',
  fontFamily: 'Helvetica Neue',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '31px',
  letterSpacing: '0.112px',
}));
