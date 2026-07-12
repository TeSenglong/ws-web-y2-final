export const products = [
  {
    id: 1,
    name: "Classic Black Hoodie",
    price: "$49",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 2,
    name: "Premium Denim Jacket",
    price: "$79",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
  },
  {
    id: 3,
    name: "Casual White Shirt",
    price: "$39",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
  },
  {
    id: 4,
    name: "Modern Sneakers",
    price: "$89",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 5,
    name: "Vintage Leather Boots",
    price: "$129",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600",
  },
  {
    id: 6,
    name: "Minimalist Watch",
    price: "$95",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 7,
    name: "Urban Backpack",
    price: "$65",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
  },
  {
    id: 8,
    name: "Slim Fit Chinos",
    price: "$54",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600",
  },
  {
    id: 9,
    name: "Classic Sunglasses",
    price: "$29",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
  },
  {
    id: 10,
    name: "Woolen Beanie Hat",
    price: "$19",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d435350?w=600",
  },
  {
    id: 11,
    name: "Leather Wallet",
    price: "$45",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
  },
  {
    id: 12,
    name: "Summer Floral Dress",
    price: "$59",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600",
  },
  {
    id: 13,
    name: "Knitted Winter Sweater",
    price: "$69",
    image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=600",
  },
  {
    id: 14,
    name: "Athletic Running Shorts",
    price: "$34",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600",
  },
  {
    id: 15,
    name: "Suede Loafers",
    price: "$110",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600",
  },
  {
    id: 16,
    name: "Graphic Print T-Shirt",
    price: "$25",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600",
  },
  {
    id: 17,
    name: "Waterproof Windbreaker",
    price: "$85",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600",
  },
  {
    id: 18,
    name: "Stainless Steel Water Bottle",
    price: "$28",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600",
  },
  {
    id: 19,
    name: "Canvas Tote Bag",
    price: "$22",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600",
  },
  {
    id: 20,
    name: "Leather Belt",
    price: "$39",
    image: "https://images.unsplash.com/photo-1624222247344-550fb8ef558d?w=600",
  },
];
  
// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_key = '?api_key=4113f3ad734e747a5b463cde8c55de42';
// const img = 'https://image.tmdb.org/t/p/';

// export default async function product() {  
//     try {
//         // Step 1: Fetch the raw response from the network
//         const response = await fetch(`https://api.escuelajs.co/api/v1/products/`);
        
//         // Step 2: Convert the raw response into a usable JavaScript array/object
//         const data = await response.json();
        
//         // Log the actual data to see your products in the console
//         console.log("Actual Product Data:", data);
        
//         // Return the clean data so other files can use it
//         return data;

//     } catch (error) {
//         // It's always a good habit to catch network errors if the API goes down
//         console.error("Failed to fetch products:", error);
//     }
// }