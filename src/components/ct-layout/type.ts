import { CTSeoMetaProps } from '@/components/ct-seo-meta/type';

export interface CTLayoutProps
  extends CTSeoMetaProps, React.ComponentPropsWithoutRef<'div'> {
  showNav?: boolean;
  title?: string;
  children: React.ReactNode;
}
