import { useEffect, useState } from "react";
import { products } from "../api";
import { Link } from "react-router-dom";
// import Cards from "../components/card";


export default function Homepage() {
  const menProducts = products.filter(product => product.category === "Man");
  console.log("Men category", menProducts);
  function scrollToTop() {
    // This scrolls the window to the very top (X: 0, Y: 0) smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar */}


      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-red-500 font-semibold uppercase">
            New Collection 2026
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-4">
            Discover Your <br />
            <span className="text-red-500">Perfect Style</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Upgrade your wardrobe with the newest fashion trends.
            High-quality clothing for men and women at affordable prices.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/products"
              onClick={scrollToTop}
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800"
            >
              Shop Now
            </Link>

            <button className="border border-black px-8 py-3 rounded-lg hover:bg-black hover:text-white">
              Explore
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900"
            alt=""
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Link to="/products" onClick={scrollToTop}>
              <img
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700"
                className="h-72 w-full object-cover"
              />
            </Link>

            <div className="p-6">
              <h3 className="font-bold text-2xl">
                Men
              </h3>

              <p className="text-gray-500 mt-2">
                Stylish outfits for every occasion.
              </p>
            </div>
          </div>

          <div className=" bg-white rounded-2xl overflow-hidden shadow-lg">
            <Link to="/products" onClick={scrollToTop}>

              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700"
                className="h-72 w-full object-cover"
              />
            </Link>

            <div className="p-6">
              <h3 className="font-bold text-2xl">
                Women
              </h3>

              <p className="text-gray-500 mt-2">
                Elegant fashion collections.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <Link to="/products" onClick={scrollToTop}>

              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700"
                className="h-72 w-full object-cover"
              />
            </Link>

            <div className="p-6">
              <h3 className="font-bold text-2xl">
                Accessories
              </h3>

              <p className="text-gray-500 mt-2">
                Complete your look with premium accessories.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Products */}


      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            New Arrivals
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            {products.slice(0, 4).map((p) => (
              <div
                key={p.id}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 bg-white"
              >
                <img
                  src={p.image}
                  className="h-72 w-full object-cover"
                />

                <div className="p-5">

                  <h3 className="font-bold text-xl">
                    {p.name}
                  </h3>

                  <p className="text-red-500 font-bold mt-2">
                    {p.price}
                  </p>

                  <button className="mt-5 w-full bg-black text-white py-3 rounded-lg hover:bg-red-500">
                    Add To Cart
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-5xl">🚚</h3>
            <h4 className="font-bold text-2xl mt-4">
              Free Shipping
            </h4>

            <p className="text-gray-500 mt-3">
              Free worldwide delivery on all orders.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-5xl">💳</h3>

            <h4 className="font-bold text-2xl mt-4">
              Secure Payment
            </h4>

            <p className="text-gray-500 mt-3">
              100% secure payment protection.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-5xl">⭐</h3>

            <h4 className="font-bold text-2xl mt-4">
              Premium Quality
            </h4>

            <p className="text-gray-500 mt-3">
              Carefully selected premium materials.
            </p>
          </div>

        </div>

      </section>

      {/* Newsletter */}

      <section className="bg-black text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Join Our Newsletter
          </h2>

          <p className="text-gray-300 mt-4">
            Get exclusive offers and latest fashion updates.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black px-5 py-3 rounded-lg w-full md:w-96"
            />

            <button className="bg-red-500 px-8 py-3 rounded-lg hover:bg-red-600">
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}
