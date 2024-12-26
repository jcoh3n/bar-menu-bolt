export interface MenuItemType {
  id: string;
  name: string;
  price: number;
  description: string;
  ingredients?: string;
  tags?: string[];
  dietary?: string[];
  featured?: boolean;
}

export interface MenuSections {
  cocktails: MenuItemType[];
  wines: MenuItemType[];
  beers: MenuItemType[];
  bites: MenuItemType[];
}