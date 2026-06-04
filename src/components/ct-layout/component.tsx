import { CTSeoMeta } from '@/components/ct-seo-meta/component';

import { Header } from './components/header/component';
import { CTLayoutProps } from './type';

const CTLayoutComponent: React.FC<CTLayoutProps> = ({
  meta,
  titlePage,
  children,
  ...rest
}) => {
  return (
    <div id="ct_layout_dashboard" className="h-screen" {...rest}>
      <CTSeoMeta meta={meta} />

      <Header titlePage={titlePage} />
      <div>
        <div id="content_container">
          <div id="content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CTLayoutComponent;
