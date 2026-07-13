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

  const emptyForm = { name: "", category: "", price: "", stock: "" };

  // Controls whether the modal is visible
  const [isModalOpen, setIsModalOpen] = useState(false);

  // null = adding a new product, otherwise holds the id being edited
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState(emptyForm);

  const openAddModal = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData(emptyForm);
  };

  const saveProduct = () => {
    if (
      !formData.name ||
      !formData.category ||
      !formData.price ||
      !formData.stock
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      // Update existing product
      setProducts(
        products.map((product) =>
          product.id === editingId ? { ...product, ...formData } : product,
        ),
      );
    } else {
      // Add new product
      const newId = products.length
        ? Math.max(...products.map((p) => p.id)) + 1
        : 1;

      setProducts([...products, { id: newId, ...formData }]);
    }

    closeModal();
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));

    if (editingId === id) {
      closeModal();
    }
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

          <button
            onClick={openAddModal}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition"
          >
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
                    <button
                      onClick={() => openEditModal(product)}
                      className="bg-blue-500 text-white px-3 py-2 rounded-lg mr-2 hover:bg-blue-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
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

      {/* ADD / EDIT MODAL */}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">
              {editingId ? "Edit Product" : "Add New Product"}
            </h2>

            <div className="space-y-4">
              <input
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
                placeholder="Category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />

              <input
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
                placeholder="Price (e.g. $25)"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />

              <input
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
                placeholder="Stock"
                type="number"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
              />
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={saveProduct}
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl hover:scale-105 transition"
              >
                {editingId ? "Save Changes" : "Add Product"}
              </button>

              <button
                onClick={closeModal}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
