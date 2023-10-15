import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { DragAndDropUpload } from '../components/DragAndDropUpload';
import { Connected } from '../components/Connected';
import Signature from '../components/Signature';
import { Stack } from '@mui/material';


const CreateSign: NextPage = () => {
  const handleCreateSign = (data: any) => {
    console.log('data', data)
  }
  return (
    <>
      <Layout header footer px py>
        <Connected>
          <DragAndDropUpload onChange={handleCreateSign} />
          <Signature />
        </Connected>
      </Layout>
    </>
  );
};

export default CreateSign;
