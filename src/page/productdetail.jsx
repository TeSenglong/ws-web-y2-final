import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { products } from "../api";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useOutletContext();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">git status
        <h1 className="text-2xl font-bold text-slate-900">Product not found</h1>
        <button
          onClick={() => navigate("/products")}
          className="mt-6 rounded-md bg-slate-950 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Back to products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <button
        onClick={() => navigate("/products")}
        className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
      >
        Back to products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-4/5 w-full rounded-xl bg-slate-100 object-cover"
        />

        <div className="flex flex-col">
          <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
            {product.category}
          </span>

          <h1 className="mt-5 text-3xl font-bold text-slate-950">
            {product.name}
          </h1>

          <p className="mt-3 text-2xl font-bold text-slate-900">
            ${product.price}.00
          </p>

          <p className="mt-6 leading-7 text-slate-600">
            A clean everyday fashion piece selected for comfort, simple styling,
            and easy outfit matching. Pair it with your favorite wardrobe items
            for casual wear, travel, or weekend plans.
          </p>

          <div className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200">
            <div className="flex justify-between px-4 py-3 text-sm">
              <span className="font-medium text-slate-500">Product ID</span>
              <span className="font-semibold text-slate-900">#{product.id}</span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm">
              <span className="font-medium text-slate-500">Category</span>
              <span className="font-semibold text-slate-900">
                {product.category}
              </span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm">
              <span className="font-medium text-slate-500">Availability</span>
              <span className="font-semibold text-emerald-600">In stock</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => addToCart(product)}
              className="h-12 rounded-md bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-95"
            >
              Add to cart
            </button>
            <button
              onClick={() => navigate("/products")}
              className="h-12 rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 active:scale-95"
            >
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
