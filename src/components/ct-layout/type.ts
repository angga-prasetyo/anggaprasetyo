export interface CTLayoutProps
  extends React.ComponentPropsWithoutRef<'div'> {
  showNav?: boolean;
  showChar?: boolean;
  title?: string;
  children: React.ReactNode;
}
