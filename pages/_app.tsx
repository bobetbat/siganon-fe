import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
  base,
  zora,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import merge from 'lodash.merge';
import theme from '../styles/theme';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID ?? '';
const { connectors } = getDefaultWallets({
  appName: 'sss',
  projectId: projectId,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: theme.palette.primary.main,
    generalBorder: theme.palette.secondary.main
  },
} as Theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider theme={myTheme} chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
