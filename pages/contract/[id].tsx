import type { NextPage } from 'next';
import { Layout } from '../../components/Layout';
import { GeneralDashborad } from '../../components/GeneralDashborad';
import { Contracts } from '../../components/Contracts';
import { ContractDashboard } from '../../components/ContractDashboard';


const Contract: NextPage = () => {

  return (
    <>
      <Layout header footer px py>
      <ContractDashboard />
      </Layout>
    </>
  );
};

export default Contract;
