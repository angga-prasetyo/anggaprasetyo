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
    <div id="ct_layout_dashboard" className="h-screen" {...rest}>
      <CTSeoMeta meta={meta} />

      <div id="content">{children}</div>
    </div>
  );
};

export default CTLayoutComponent;
