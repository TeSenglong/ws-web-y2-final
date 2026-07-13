import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nike T-Shirt",
      category: "Men",
      price: "$25",
      stock: 20,
    },
    {
      id: 2,
      name: "Luxury Dress",
      category: "Women",
      price: "$60",
      stock: 15,
    },
    {
      id: 3,
      name: "Denim Jacket",
      category: "Fashion",
      price: "$45",
      stock: 10,
    },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-pink-50 flex">
      {/* Sidebar */}

      <div className="w-72 bg-gradient-to-b from-gray-900 to-purple-950 text-white p-6">
        <h1 className="text-3xl font-bold text-pink-400 mb-10">
          👗 Fashion Admin
        </h1>

        <ul className="space-y-5 text-lg">
          <li
            className="cursor-pointer hover:text-pink-400"
            onClick={() => navigate("/dashboard")}
          >
            🏠 Dashboard
          </li>

          <li className="text-pink-400">👕 Products</li>

          <li
            className="cursor-pointer hover:text-pink-400"
            onClick={() => navigate("/admin/orders")}
          >
            🛒 Orders
          </li>
        </ul>
      </div>

      {/* Content */}

      <div className="flex-1 p-10">
        <div className="flex justify-between mb-8">
          <h1 className="text-4xl font-bold">Products</h1>

          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl">
            + Add Product
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-7">
          <table className="w-full">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="p-4">ID</th>

                <th>Product</th>

                <th>Category</th>

                <th>Price</th>

                <th>Stock</th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-pink-50 text-center"
                >
                  <td className="p-4">{product.id}</td>

                  <td className="font-bold">{product.name}</td>

                  <td>{product.category}</td>

                  <td className="text-pink-600 font-bold">{product.price}</td>

                  <td>{product.stock}</td>

                  <td>
                    <button className="bg-blue-500 text-white px-3 py-2 rounded-lg mr-2">
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-500 text-white px-3 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
