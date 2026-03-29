import profileimg from "@/assets/profileimg.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

function AboutMePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h3 className="text-3xl font-bold">I am Alejandro Duque.</h3>
      <p className="mt-4 text-lg p-10">
        I am a frontend web developer UX/UI Designer with experience in React, TypeScript, and Tailwind CSS. Passionate about creating user-friendly
        and visually appealing web applications. I am eager to contribute my skills and creativity to a dynamic team, while continuously learning and
        growing in the field of web development.
      </p>
      <div>
        <img className="w-96 h-96 rounded-full object-cover border-4 border-gray-200" src={profileimg} alt="Imagen de Perfil" />
        <div className="flex flex-row items-center justify-center gap-6 py-2 mx-5 my-5">
          <a
            href="https://github.com/AlejandroDuqueG-design"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <FaGithub className="text-2xl md:text-4xl lg:text-4xl" />
          </a>

          <a
            href="https://www.behance.net/alejandroduque28"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <FaBehanceSquare className="text-2xl md:text-4xl lg:text-4xl text-[#053eff]" />
          </a>

          <a
            href="https://linkedin.com/in/alejandroduque-webdeveloper/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <FaLinkedin className="text-2xl md:text-4xl lg:text-4xl text-[#0077b5]" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default AboutMePage;
