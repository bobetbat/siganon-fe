import { Button, styled } from "@mui/material";

export const ActionButton = styled(Button)({
  borderRadius: '3rem',
  paddingInline: "1rem",
  fontWeight: 600,
  color: 'white',
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
  },
});
