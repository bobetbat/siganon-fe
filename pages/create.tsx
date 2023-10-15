import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { DragAndDropUpload } from '../components/DragAndDropUpload';
import { Connected } from '../components/Connected';


const CreateSign: NextPage = () => {
  const handleCreateSign = (data: any) => {
    console.log('data', data)
  }
  return (
    <>
      <Layout header footer px py>
        <Connected>
          <DragAndDropUpload onChange={handleCreateSign} />
        </Connected>
      </Layout>
    </>
  );
};

export default CreateSign;
