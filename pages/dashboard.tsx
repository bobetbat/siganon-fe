import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { GeneralDashborad } from '../components/GeneralDashborad';
import { Contracts } from '../components/Contracts';


const Dashboard: NextPage = () => {

  return (
    <>
      <Layout header footer px py>
      <GeneralDashborad />
      <Contracts />
      </Layout>
    </>
  );
};

export default Dashboard;
