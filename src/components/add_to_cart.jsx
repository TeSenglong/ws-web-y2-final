import { Link } from "react-router-dom";

function CartPage({ cart, updateQuantity, removeFromCart, clearCart }) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 75 || subtotal === 0 ? 0 : 6.99;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    alert("Checkout complete. Thank you for your order!");
    clearCart();
  };

  return (
    <div className="min-h-screen bg-stone-100">
      <main className="px-6 py-12 md:px-[6vw]">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-sm font-extrabold uppercase text-rose-700">
            Shopping bag
          </p>
          <h1 className="text-5xl font-extrabold text-slate-900">
            Your cart
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Review your selected items before checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          <section className="grid justify-items-center gap-3 rounded-xl border border-stone-200 bg-white px-6 py-14 text-center shadow-lg shadow-slate-900/10">
            <h2 className="text-2xl font-extrabold">Your cart is empty</h2>
            <p className="text-slate-600">
              Add products to your cart and they will appear here.
            </p>
            <Link
              className="mt-3 inline-flex min-h-12 items-center rounded-lg bg-slate-900 px-6 font-extrabold text-white hover:bg-slate-700"
              to="/products"
            >
              Browse products
            </Link>
          </section>
        ) : (
          <section className="grid gap-7 lg:grid-cols-[1fr_340px] lg:items-start">
            <div className="grid gap-4">
              {cart.map((item) => (
                <article
                  className="grid items-center gap-4 rounded-xl border border-stone-200 bg-white p-4 shadow-lg shadow-slate-900/10 md:grid-cols-[120px_1fr_auto_auto]"
                  key={item.id}
                >
                  <img
                    className="h-32 w-32 rounded-lg object-cover md:w-full"
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <span className="text-sm font-extrabold uppercase text-rose-700">
                      {item.category}
                    </span>
                    <h2 className="mt-2 text-xl font-extrabold">
                      {item.name}
                    </h2>
                    <p className="mt-2 font-bold">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="grid w-max grid-cols-3 overflow-hidden rounded-lg border border-stone-300 text-center">
                    <button
                      className="h-9 w-9 bg-stone-100 font-extrabold"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      -
                    </button>
                    <strong className="grid h-9 w-9 place-items-center">
                      {item.quantity}
                    </strong>
                    <button
                      className="h-9 w-9 bg-stone-100 font-extrabold"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="w-max bg-transparent font-extrabold text-rose-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>

            <aside className="rounded-xl border border-stone-200 bg-white p-6 shadow-lg shadow-slate-900/10 lg:sticky lg:top-24">
              <h2 className="mb-4 text-2xl font-extrabold">Order summary</h2>
              <div className="flex justify-between border-b border-stone-200 py-3">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <div className="flex justify-between border-b border-stone-200 py-3">
                <span>Shipping</span>
                <strong>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</strong>
              </div>
              <div className="flex justify-between border-b border-stone-200 py-3 text-xl">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <button
                onClick={handleCheckout}
                className="mt-5 min-h-12 w-full rounded-lg bg-slate-900 font-extrabold text-white hover:bg-slate-700"
              >
                Checkout
              </button>
              <Link
                to="/products"
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-stone-300 bg-white font-extrabold text-slate-900 hover:bg-stone-50"
              >
                Back to shop
              </Link>
            </aside>
          </section>
        )}
      </main>
    </div>
  );
}

export default CartPage;
