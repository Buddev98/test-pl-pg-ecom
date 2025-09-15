import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Noise-cancelling wireless headphones with premium sound quality and 30-hour battery life.",
    price: 249.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    stock: 15
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.",
    price: 179.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    stock: 23
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    description: "Comfortable ergonomic chair with lumbar support for long working hours.",
    price: 299.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    stock: 8
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    description: "Eco-friendly, soft cotton t-shirt available in multiple colors.",
    price: 29.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.3,
    stock: 45
  },
  {
    id: 5,
    name: "Professional DSLR Camera",
    description: "High-resolution camera with multiple lenses for professional photography.",
    price: 1299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    stock: 5
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    description: "Eco-friendly, insulated water bottle that keeps drinks cold for 24 hours.",
    price: 34.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    stock: 32
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    description: "Precision gaming mouse with customizable RGB lighting and programmable buttons.",
    price: 89.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    stock: 18
  },
  {
    id: 8,
    name: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots and RFID protection.",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.4,
    stock: 27
  },
  {
    id: 9,
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with premium sound and home automation features.",
    price: 129.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    stock: 12
  },
  {
    id: 10,
    name: "Yoga Mat",
    description: "Non-slip, eco-friendly yoga mat with carrying strap.",
    price: 39.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.2,
    stock: 20
  },
  {
    id: 11,
    name: "Ceramic Coffee Mug Set",
    description: "Set of 4 handcrafted ceramic coffee mugs in assorted colors.",
    price: 42.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.3,
    stock: 16
  },
  {
    id: 12,
    name: "Portable Bluetooth Speaker",
    description: "Waterproof, portable speaker with 20-hour battery life and deep bass.",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    stock: 14
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));
