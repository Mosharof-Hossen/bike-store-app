export type TBike = {
  name: string;
  brand: string;
  model: string;
  image: string;
  price: number;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric';
  description: string;
  quantity: number;
  inStock: boolean;
};
