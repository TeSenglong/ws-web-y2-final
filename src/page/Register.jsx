import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      ...formData,
      role: "customer",
    };

    // Save user
    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Register successful!");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-96 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">
          Fashion Register
        </h1>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border p-3 rounded mb-4"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-3 rounded hover:bg-pink-700"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have account?
          <span
            className="text-pink-600 cursor-pointer ml-2"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
