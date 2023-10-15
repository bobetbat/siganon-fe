import type { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { GeneralDashborad } from '../components/GeneralDashborad';
import { Contracts } from '../components/Contracts';
import { Connected } from '../components/Connected';


const Dashboard: NextPage = () => {

  return (
    <>
      <Layout header footer px py>
        <Connected>
          <GeneralDashborad />
          <Contracts />
        </Connected>
      </Layout>
    </>
  );
};

export default Dashboard;
