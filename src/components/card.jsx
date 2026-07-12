// import { Link } from "react-router-dom";
// import { products } from "../api";

// export default function Cards() {
//     return (
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

//             {products.slice(0, 4).map((p) => (
//                 <div
//                     key={p.id}
//                     className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 bg-white"
//                 >
//                     <Link to={`/product/${product.id}`}>
//                         <img
//                             src={p.image}
//                             className="h-72 w-full object-cover"
//                         />
//                     </Link>


//                     <div className="p-5">

//                         <h3 className="font-bold text-xl">
//                             {p.name}
//                         </h3>

//                         <p className="text-red-500 font-bold mt-2">
//                             {p.price}
//                         </p>

//                         <button className="mt-5 w-full bg-black text-white py-3 rounded-lg hover:bg-red-500">
//                             Add To Cart
//                         </button>

//                     </div>
//                 </div>
//             ))}

//         </div>
//     )
// }