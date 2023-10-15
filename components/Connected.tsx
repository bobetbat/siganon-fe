
import { Card, styled } from '@mui/material'
import { useAccount } from 'wagmi'

export const SCard = styled(Card)({
  borderRadius: '3rem',
  paddingInline: "1rem",
  height: "200px",
  marginTop:"100px",
  fontWeight: 600,
  border: "2px solid black",
  alignItems: 'center',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Helvetica Neue',
  fontSize: '24px',
  fontStyle: 'normal',
  lineHeight: '31px',
  letterSpacing: '0.112px',
});

export function Connected({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount()

  if (!isConnected) return <SCard>Please connect wallet</SCard>
  return <>{children}</>
}
