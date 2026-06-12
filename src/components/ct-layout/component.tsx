import { CTSeoMeta } from '@/components/ct-seo-meta/component';
import { cn } from '@/lib/utils';

import { CTLayoutProps } from './type';

const CTLayoutComponent: React.FC<CTLayoutProps> = ({
  meta,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  titlePage,
  children,
  className,
  ...rest
}) => {
  return (
    <div id="ct_layout" className={cn('h-screen', className)} {...rest}>
      <CTSeoMeta meta={meta} />
      {children}
    </div>
  );
};

export default CTLayoutComponent;
