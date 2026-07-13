import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

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
      setError("Email or password incorrect");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        backgroundColor: "#fafafa",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, #e5e5e5 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="w-full max-w-md">
        {/* Logo above card */}
        <div className="text-center mb-6">
          <Link to="/" className="text-3xl font-black tracking-tight">
            FASHION<span className="text-red-500">.</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Accent bar */}
          <div className="h-2 bg-gradient-to-r from-red-500 to-black"></div>

          <div className="p-8 lg:p-10">
            <p className="text-red-500 text-xs font-bold tracking-wide mb-2">
              WELCOME BACK
            </p>

            <h1 className="text-3xl font-black mb-2 leading-tight">Sign In</h1>

            <p className="text-gray-500 text-sm mb-8">
              Enter your details to access your account.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
              >
                Login
              </button>
            </form>

            <div className="mt-6 p-3 bg-gray-50 rounded-xl text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-600">Demo accounts:</p>
              <p>Admin — admin@gmail.com / 123456</p>
              <p>Customer — user@gmail.com / 123456</p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-black font-semibold underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
