import { CTSeoMetaProps } from '@/components/ct-seo-meta/type';

export interface CTLayoutProps
  extends CTSeoMetaProps, React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}
