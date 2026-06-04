import { useNavigate } from 'react-router-dom';

import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';

const Error404: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div id="error_404_page">
      <h1>Error</h1>
      <button onClick={() => navigate(UIEndpointsCommon.HOME)}>
        Back to Home
      </button>
    </div>
  );
};

export default Error404;
