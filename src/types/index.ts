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

export type SortOption = 'name' | 'price-low' | 'price-high' | 'rating';
