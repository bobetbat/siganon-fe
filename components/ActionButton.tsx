import { Button, styled } from "@mui/material";

export const ActionButton = styled(Button)({
  borderRadius: '3rem',
  paddingInline: "1rem",
  fontWeight: 600,
  color: 'white',
  border:"2px solid white",
  backgroundColor: 'black',
  '&:hover': {
  border:"2px solid black",
  backgroundColor: 'white',
    color: 'black',
  },
});
