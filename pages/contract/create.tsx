import type { NextPage } from 'next';
import { Layout } from '../../components/Layout';
import { DragAndDropUpload } from '../../components/DragAndDropUpload';
import { Connected } from '../../components/Connected';


const CreateContract: NextPage = () => {
  const handleCreateSign = (data: any) => {
    console.log('data', data)
  }
  return (
    <>
      <Connected>
        <Layout header footer px py>
          <DragAndDropUpload onChange={handleCreateSign} />
        </Layout>
      </Connected>
    </>
  );
};

export default CreateContract;
