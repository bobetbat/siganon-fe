import type { NextPage } from 'next';
import { Layout } from '../../components/Layout';
import { ContractDashboard } from '../../components/ContractDashboard';
import { Connected } from '../../components/Connected';


const Contract: NextPage = () => {

  return (
    <>
      <Layout header footer px py>
        <Connected>
          <ContractDashboard />
        </Connected>
      </Layout>
    </>
  );
};

export default Contract;
