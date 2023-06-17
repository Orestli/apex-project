export interface SidebarItemProps {
  Icon: React.FC<React.SVGProps<SVGElement>>;
  authOnly?: boolean;
  path: string;
  text: string;
}
