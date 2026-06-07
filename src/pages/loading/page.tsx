import { CTLayoutDashboard } from '@/components/ct-layout';

import { pageMeta } from './constant';

const LoadingPage: React.FC = () => {
  const generateLoading = () => {
    const result = [];
    for (let index = 0; index < 37; index++) {
      result.push(<h1>Loading</h1>);
    }
    return result;
  };
  return (
    <CTLayoutDashboard meta={pageMeta} titlePage="LoadingPage">
      <div>{generateLoading()}</div>
    </CTLayoutDashboard>
  );
};

export default LoadingPage;
