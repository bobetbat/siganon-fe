import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { DragAndDropUpload } from '../components/DragAndDropUpload';
import { Connected } from '../components/Connected';
import Signature from '../components/Signature';
import { Stack } from '@mui/material';
import { uploadToWeb3Storage } from '../services/web3storage';
import { useCallback, useState } from 'react';


const CreateSign: NextPage = () => {
  const [cid, setCid] = useState<any>()
  const handleCreateSign = useCallback(async (data: any) => {
    try {
      const newCid = await uploadToWeb3Storage(data)
      console.log('Uploaded file with CID:', newCid)
      setCid(newCid)
    } catch (e) {
      console.log('error', e)
    }
  }, [])
  const url = `https://${cid}.ipfs.dweb.link/siganon.jpeg`;
  console.log('url', url)
  return (
    <>
      <Layout header footer px py>
        <Connected>
          <DragAndDropUpload onSubmit={handleCreateSign} />
          <Signature onSubmit={handleCreateSign} />
          {/* {cid ? <img width={200} height={200} src={url} alt="My Uploaded Image" /> : ''} */}
        </Connected>
      </Layout>
    </>
  );
};

export default CreateSign;
