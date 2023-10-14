import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';


const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        {/* TODO */}
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Layout header footer>
        <Typography>
          hello
        </Typography>
      </Layout>
    </>
  );
};

export default Home;
