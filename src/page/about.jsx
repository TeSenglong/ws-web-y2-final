export default function About() {
  const team = [
    {
      name: "Sophia Carter",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      name: "Michael Brown",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
    {
      name: "Emma Wilson",
      role: "Fashion Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            About Our Fashion Store
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            Bringing confidence, style, and quality fashion to everyone.
            We believe fashion is more than clothing—it's a way to express
            yourself.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900"
          alt="Our Story"
          className="rounded-3xl shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-gray-600 leading-8">
            Founded in 2026, our fashion store started with one simple
            mission: to provide premium-quality clothing at affordable
            prices. Today, we proudly serve thousands of customers with
            collections inspired by modern trends, timeless elegance, and
            everyday comfort.
          </p>

          <p className="text-gray-600 leading-8 mt-6">
            Every piece is carefully selected to ensure excellent quality,
            comfort, and style for every occasion.
          </p>
        </div>

      </section>

      {/* Mission & Vision */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-gray-100 p-10 rounded-2xl">
            <h3 className="text-3xl font-bold mb-5">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-7">
              To empower people through fashion by offering stylish,
              high-quality clothing that makes everyone feel confident and
              comfortable every day.
            </p>
          </div>

          <div className="bg-black text-white p-10 rounded-2xl">
            <h3 className="text-3xl font-bold mb-5">
              Our Vision
            </h3>

            <p className="text-gray-300 leading-7">
              To become one of the world's most trusted fashion brands,
              inspiring confidence through innovation, sustainability, and
              exceptional customer experiences.
            </p>
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-5xl font-bold text-red-500">
              50K+
            </h2>
            <p className="mt-3 text-gray-600">
              Happy Customers
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-5xl font-bold text-red-500">
              1,200+
            </h2>
            <p className="mt-3 text-gray-600">
              Products
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-5xl font-bold text-red-500">
              30+
            </h2>
            <p className="mt-3 text-gray-600">
              Countries
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-5xl font-bold text-red-500">
              4.9★
            </h2>
            <p className="mt-3 text-gray-600">
              Customer Rating
            </p>
          </div>

        </div>

      </section>

      {/* Team */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14">

            {team.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold">
                    {member.name}
                  </h3>

                  <p className="text-red-500 mt-2">
                    {member.role}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Shop With Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-5xl">🚚</div>
            <h3 className="font-bold text-2xl mt-5">
              Fast Delivery
            </h3>
            <p className="text-gray-600 mt-3">
              Quick shipping worldwide with secure packaging.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-5xl">⭐</div>
            <h3 className="font-bold text-2xl mt-5">
              Premium Quality
            </h3>
            <p className="text-gray-600 mt-3">
              Every product is carefully inspected before delivery.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-5xl">💳</div>
            <h3 className="font-bold text-2xl mt-5">
              Secure Payments
            </h3>
            <p className="text-gray-600 mt-3">
              Safe and reliable payment options for every customer.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready to Upgrade Your Style?
          </h2>

          <p className="text-gray-300 mt-6 text-lg">
            Discover the latest trends and timeless fashion pieces today.
          </p>

          <button className="mt-10 bg-red-500 hover:bg-red-600 px-10 py-4 rounded-lg text-lg font-semibold">
            Shop Now
          </button>

        </div>
      </section>

    </div>
  );
}