

export interface Option {
    label: string;
    emoji: React.ReactElement;
    href: string;
}


export interface MenuItem {
  title: string;
  menu: string;
  options: Option[];
}

export interface ContentMenuProps {
    options: Option[];
}
