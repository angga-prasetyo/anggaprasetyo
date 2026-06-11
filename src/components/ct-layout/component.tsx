import { CTSeoMeta } from '@/components/ct-seo-meta/component';

import { CTLayoutProps } from './type';

const CTLayoutComponent: React.FC<CTLayoutProps> = ({
  meta,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  titlePage,
  children,
  ...rest
}) => {
  return (
    <div id="ct_layout" className="h-screen" {...rest}>
      <CTSeoMeta meta={meta} />
      {children}
    </div>
  );
};

export default CTLayoutComponent;
