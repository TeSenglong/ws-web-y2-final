import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  const orders = [
    {
      id: 1,
      customer: "Dara",
      product: "Nike T-Shirt",
      price: "$25",
      status: "Completed",
    },

    {
      id: 2,
      customer: "Sokha",
      product: "Luxury Dress",
      price: "$60",
      status: "Pending",
    },

    {
      id: 3,
      customer: "Vanna",
      product: "Denim Jacket",
      price: "$45",
      status: "Shipping",
    },
  ];

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

          <li
            className="cursor-pointer hover:text-pink-400"
            onClick={() => navigate("/admin/products")}
          >
            👕 Products
          </li>

          <li className="text-pink-400">🛒 Orders</li>
        </ul>
      </div>

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-8">Orders Management</h1>

        <div className="bg-white rounded-2xl shadow-xl p-7">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4">ID</th>

                <th>Customer</th>

                <th>Product</th>

                <th>Price</th>

                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b text-center hover:bg-pink-50"
                >
                  <td className="p-4">{order.id}</td>

                  <td>{order.customer}</td>

                  <td>{order.product}</td>

                  <td className="text-pink-600 font-bold">{order.price}</td>

                  <td>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                      {order.status}
                    </span>
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

export default Orders;
