import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo accounts
    const admin = {
      email: "admin@gmail.com",
      password: "123456",
      role: "admin",
    };

    const customer = {
      email: "user@gmail.com",
      password: "123456",
      role: "customer",
    };

    if (email === admin.email && password === admin.password) {
      localStorage.setItem("user", JSON.stringify(admin));
      navigate("/dashboard");
    } else if (email === customer.email && password === customer.password) {
      localStorage.setItem("user", JSON.stringify(customer));
      navigate("/");
    } else {
      alert("Email or Password incorrect!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">
          Fashion Login
        </h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-3 rounded hover:bg-pink-700"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don't have account?
          <span
            className="text-pink-600 cursor-pointer ml-2"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
