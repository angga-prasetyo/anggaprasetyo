import { CTSeoMetaProps } from '@/components/ct-seo-meta/type';

export interface CTLayoutProps
  extends CTSeoMetaProps, React.ComponentPropsWithoutRef<'div'> {
  /**
   * Title for your page. The title is customizable by using React Node or simply using a string.
   *
   * @example
   * <CTLayoutDashboard titlePage={<div><p>Welcome back,</p><h1>Custom Admin</h1></div>}>
   *   // .. children
   * </CTLayoutDashboard>
   */
  titlePage?: string | React.ReactNode;
  children: React.ReactNode;
}
