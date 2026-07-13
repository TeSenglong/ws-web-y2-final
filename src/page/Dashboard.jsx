import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nike T-Shirt",
      price: "$25",
      category: "Men",
    },
    {
      id: 2,
      name: "Women Dress",
      price: "$40",
      category: "Women",
    },
  ]);

  const emptyForm = { name: "", price: "", category: "" };

  const [newProduct, setNewProduct] = useState(emptyForm);

  // Tracks which product id is currently being edited (null = add mode)
  const [editingId, setEditingId] = useState(null);

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category) {
      alert("Please fill all fields");
      return;
    }

    setProducts([
      ...products,
      {
        id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
        ...newProduct,
      },
    ]);

    setNewProduct(emptyForm);
  };

  const startEdit = (product) => {
    setEditingId(product.id);
    setNewProduct({
      name: product.name,
      price: product.price,
      category: product.category,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewProduct(emptyForm);
  };

  const saveEdit = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category) {
      alert("Please fill all fields");
      return;
    }

    setProducts(
      products.map((product) =>
        product.id === editingId ? { ...product, ...newProduct } : product,
      ),
    );

    setEditingId(null);
    setNewProduct(emptyForm);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));

    // If the product being deleted was mid-edit, reset the form
    if (editingId === id) {
      cancelEdit();
    }
  };

  const logout = () => {
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-pink-50 to-purple-100 flex">
      {/* SIDEBAR */}

      <div className="w-72 bg-gradient-to-b from-gray-900 to-purple-950 text-white p-6 shadow-2xl">
        <h1 className="text-3xl font-extrabold text-pink-400 mb-10">
          Fashion Admin
        </h1>

        <ul className="space-y-5 text-lg">
          <li
            className="cursor-pointer hover:text-pink-400 transition"
            onClick={() => navigate("/dashboard")}
          >
            🏠 Dashboard
          </li>

          <li
            className="cursor-pointer hover:text-pink-400 transition"
            onClick={() => navigate("/admin/products")}
          >
            👕 Products
          </li>

          <li
            className="cursor-pointer hover:text-pink-400 transition"
            onClick={() => navigate("/admin/orders")}
          >
            🛒 Orders
          </li>

          <li
            className="cursor-pointer hover:text-pink-400 transition"
            onClick={logout}
          >
            🚪 Logout
          </li>
        </ul>
      </div>

      {/* CONTENT */}

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>

        {/* STAT CARDS */}

        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <p className="text-gray-500">Products</p>

            <h2 className="text-4xl font-bold text-pink-600">
              {products.length}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <p className="text-gray-500">Customers</p>

            <h2 className="text-4xl font-bold text-purple-600">120</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <p className="text-gray-500">Orders</p>

            <h2 className="text-4xl font-bold text-blue-600">45</h2>
          </div>
        </div>

        {/* ADD / EDIT PRODUCT */}

        <div className="bg-white rounded-2xl shadow-xl p-7 mb-10">
          <h2 className="text-2xl font-bold mb-5">
            {editingId ? "✏️ Edit Product" : "➕ Add New Product"}
          </h2>

          <div className="grid grid-cols-4 gap-4">
            <input
              className="border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  name: e.target.value,
                })
              }
            />

            <input
              className="border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: e.target.value,
                })
              }
            />

            <input
              className="border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  category: e.target.value,
                })
              }
            />

            {editingId ? (
              <div className="flex gap-2">
                <button
                  onClick={saveEdit}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:scale-105 transition"
                >
                  Save
                </button>

                <button
                  onClick={cancelEdit}
                  className="flex-1 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={addProduct}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:scale-105 transition"
              >
                Add Product
              </button>
            )}
          </div>
        </div>

        {/* PRODUCT TABLE */}

        <div className="bg-white rounded-2xl shadow-xl p-7">
          <h2 className="text-2xl font-bold mb-5">👕 Product Collection</h2>

          <table className="w-full">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="p-3">ID</th>

                <th>Name</th>

                <th>Price</th>

                <th>Category</th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className={`border-b hover:bg-pink-50 transition text-center ${
                    editingId === product.id ? "bg-pink-50" : ""
                  }`}
                >
                  <td className="p-4">{product.id}</td>

                  <td>{product.name}</td>

                  <td className="text-pink-600 font-bold">{product.price}</td>

                  <td>{product.category}</td>

                  <td>
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => startEdit(product)}
                        className="bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
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

export default Dashboard;
