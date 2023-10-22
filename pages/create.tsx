import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { DragAndDropUpload } from '../components/DragAndDropUpload';
import { Connected } from '../components/Connected';
import Signature from '../components/Signature';
import { Stack } from '@mui/material';
import { uploadToWeb3Storage } from '../services/web3storage';
import { useCallback, useState } from 'react';

import * as LitJsSdk from '@lit-protocol/lit-node-client';
import { benchmark } from '../utils/string';
import { AcceptedFileType } from '@lit-protocol/types';

const CreateSign: NextPage = () => {
  const [cid, setCid] = useState<any>()
  // ----- autogen:app-name:end  -----

  const go = async () => {
   
  }
  
  const handleCreateSign = useCallback(async (data: any) => {
    try {
      const litNodeClient = new LitJsSdk.LitNodeClient({
        litNetwork: 'cayenne',
      });
      await litNodeClient.connect();
  
  
      // --------- NEXT STEP ---------
      const authRes = await benchmark(async () => {
        return LitJsSdk.checkAndSignAuthMessage({
          chain: 'ethereum'
        });
      });
  
      const accs = [
        {
          contractAddress: '',
          standardContractType: '',
          chain: 'ethereum',
          method: 'eth_getBalance',
          parameters: [':userAddress', 'latest'],
          returnValueTest: {
            comparator: '>=',
            value: '0',
          },
        },
      ];
  
      console.log("NETWORK PUB KEY:", litNodeClient.networkPubKey);
  
  
      // --------- NEXT STEP ---------
      const encryptRes = await LitJsSdk.encryptFile({
          accessControlConditions: accs,
          authSig: authRes.result,
          chain: 'ethereum',
          file: data,
        }, litNodeClient);
      ;
  
  
      // --------- NEXT STEP ---------
      const decryptRes = await   LitJsSdk.decryptToFile({
          accessControlConditions: accs,
          ciphertext: encryptRes.ciphertext,
          dataToEncryptHash: encryptRes.dataToEncryptHash,
          authSig: authRes.result,
          chain: 'ethereum',
        }, litNodeClient);

      console.log('encryptRes',encryptRes)
      console.log('decryptRes',decryptRes)
      const newCid = await uploadToWeb3Storage(encryptRes)//data:File
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
