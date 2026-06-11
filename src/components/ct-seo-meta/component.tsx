import { Helmet } from 'react-helmet-async';

import type { CTSeoMetaProps } from './type';

export const CTSeoMeta: React.FC<CTSeoMetaProps> = ({ meta }) => {
  const {
    titlePage,
    descriptionPage = 'Custom Template for React and written with TypeScript.',
  } = meta || {};

  return (
    <Helmet>
      <title>{titlePage}</title>
      <meta name="description" content={descriptionPage} />
      {/** Please add more meta if needed */}
    </Helmet>
  );
};
