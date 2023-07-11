export interface INavigationItem {
  name: string;
  link: string | string[];
  icon: string;
  type: 'fa' | 'mat';
  permissions?: string[];
  license?: string | string[];
  show?: () => boolean;
}
