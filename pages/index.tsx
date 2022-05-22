import { ReactElement } from 'react';
import Home from '../components/Home';
import Layout from '../components/Layout';

const Landing = () => {
  return (
    <>
      <Home />
    </>
  );
};

Landing.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Landing;
