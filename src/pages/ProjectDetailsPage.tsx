import { projects } from "@/utils/projectData";
import { useParams } from "react-router";

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
    <div>
      <div className="text-2xl flex items-center justify-center font-bold mt-5">{title}</div>
      <div className="mb-3 flex flex-col items-center justify-center max-w-screen mt-3 p-5">{description}</div>
      <div className="flex items-center justify-center">
        <div className="w-3/5 rounded-xl border-2 border-green-500">
          <img src={projectImages[0].src} />
        </div>
      </div>
      <div className="mb-3 flex flex-col items-center justify-center max-w-screen mt-3 p-5">{methodology}</div>
      <div className="flex items-center justify-center">IMAGEN</div>
    </div>
  );
}
export default ProjectDetailsPage;
