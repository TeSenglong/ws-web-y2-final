export default function LoginPage() {
  return (
    <section className="min-h-screen bg-white">


      {/* Login Content */}
      <div className="flex items-center justify-center bg-gray-50 px-6 py-20 min-h-[calc(100vh-89px)]">
        <div className="bg-white shadow-sm rounded-2xl w-full max-w-md p-10">
          <p className="text-red-500 font-semibold tracking-wide mb-3 text-center">
            WELCOME BACK
          </p>
          <h1 className="text-4xl font-extrabold text-black text-center mb-2">
            Login to <span className="text-red-500">Fashion.</span>
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Enter your details to access your account
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-black" />
                Remember me
              </label>
              <a href="#" className="text-red-500 font-medium hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 transition"
            >
              Login
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-gray-400 text-sm">OR</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <div className="space-y-3">
            <button className="w-full border border-gray-300 rounded-md py-3 font-medium text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2">
              Continue with Google
            </button>
            <button className="w-full border border-gray-300 rounded-md py-3 font-medium text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2">
              Continue with Facebook
            </button>
          </div>

          <p className="text-center text-gray-600 mt-8">
            Don't have an account?{" "}
            <a href="#" className="text-red-500 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
