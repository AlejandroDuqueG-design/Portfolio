import { projects } from "@/utils/projectData";
import { useParams } from "react-router";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";

function ProjectDetailsPage() {
  const { project } = useParams();
  console.log(project);

  const projectIndex = parseInt(project as string); //parseInt es una funcion de typescript para convertir strings a numeros

  if (project === undefined || isNaN(projectIndex) || projectIndex > projects.length) {
    return <div>Project does not exist</div>;
  }
  const { id, description, title, githubLink, imageCover, technologies, liveDemoLink, methodology, projectImages } = projects[projectIndex];
  console.log(projects[projectIndex]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 mx-7 my-5">
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-justify">{description}</div>

      <div className="rounded-xl border-2 border-green-500 w-full mx-1">
        <img src={projectImages[0].src} className="w-full object-cover rounded-xl" />
      </div>

      <div className="w-full flex flex-row items-center justify-center gap-2 bg-gray-100 py-2 mx-5 my-5 rounded-lg">
        <FaHtml5 className="text-red-500 text-2xl rounded-1x1 md:text-4xl lg:text-6xl" />
        <IoLogoJavascript className="text-yellow-400 text-2xl rounded-1x1 md:text-4xl lg:text-6xl" />
        <FaReact className="text-blue-700 text-2xl md:text-4xl lg:text-6xl" />
      </div>
      <div className="text-justify">{methodology}</div>
      <div className="rounded-xl border-2 border-green-500 w-full mx-1">
        <img src={projectImages[0].src} className="w-full object-cover rounded-xl" />
      </div>
    </div>
  );
}
export default ProjectDetailsPage;
