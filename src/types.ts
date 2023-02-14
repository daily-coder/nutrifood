export interface Item {
  id: number;
  item: string;
  price: number;
  src: string;
}

export interface StoreItemType extends Item {
  height: number;
  width: number;
  type?: string;
}

export interface StoreItemsData {
  fruits: StoreItemType[];
  vegetables: StoreItemType[];
  nuts: StoreItemType[];
}
