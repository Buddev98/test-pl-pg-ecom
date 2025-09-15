export type SortOption = 'name' | 'name-desc' | 'price-low' | 'price-high' | 'rating';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  stock: number;
}
