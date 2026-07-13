import team1 from "../assets/p1.jpg";
import team2 from "../assets/p2.jpg";
import team3 from "../assets/p3.jpg";
import team4 from "../assets/p4.jpg";

import {
  FaUserTie,
  FaLaptopCode,
  FaPalette,
  FaTasks,
  FaGithub,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

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
      👨‍💻 Meet Our Team
    </h2>

    <p className="text-center text-gray-500 mt-3 mb-12">
      Our team worked together to build this Fashion Store project.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {team.map((member) => (
        <div
          key={member.name}
          className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6"
        >

          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-red-500 shadow-md"
            />
          </div>

          {/* Name */}
          <h3 className="text-2xl font-bold text-center mt-5">
            {member.name}
          </h3>

          {/* Role with Icon */}
          <div className="flex justify-center items-center gap-2 text-red-500 mt-2">

            {member.name === "Phorng Monorom" && <FaTasks />}
            {member.name === "Te Senglong" && <FaPalette />}
            {member.name === "Kan Sokhavathana" && <FaLaptopCode />}
            {member.name === "Saley Visal" && <FaUserTie />}

            <span className="font-semibold">
              {member.role}
            </span>

          </div>

          {/* Description */}
          <p className="text-gray-600 text-center mt-4 text-sm leading-6">
            {member.description}
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-6 text-2xl">

            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-black transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-red-500 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>
 );
}
