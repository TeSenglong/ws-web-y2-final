import team1 from "../assets/p1.jpg";
import team2 from "../assets/p2.jpg";
import team3 from "../assets/p3.jpg";
import team4 from "../assets/p4.jpg";

export default function About() {
  const team = [
    {
      name: "Phorng Monorom",
      role: "Products",
      description: "Managed the products, assigned tasks, and coordinated the team.",
      image: team1,
    },
    {
      name: "Te Senglong",
      role: "Structure & UI Designer",
      description: "Designed the structure and user interface of the application.",
      image: team2,
    },
    {
      name: "Kan Sokhavathana",
      role: "Create Dashboard",
      description: "Built login and registration features.",
      image: team3,
    },
    {
      name: "Saley Visal",
      role: "Navbar & Footer Designer",
      description: "Designed the About page, Navbar, and Footer components for the application.",
      image: team4,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Meet Our Team
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-12">
          Our team worked together to build this Fashion Store project.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((member) => (
            <div
              key={member.name}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-red-500 font-semibold mt-2">
                  {member.role}
                </p>

                <p className="text-gray-600 mt-4 text-sm leading-6">
                  {member.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}