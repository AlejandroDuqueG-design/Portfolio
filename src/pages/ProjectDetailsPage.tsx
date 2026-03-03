import { projects } from "@/utils/projectData";
import { useParams } from "react-router";

function ProjectDetailsPage() {
  const { project } = useParams();
  console.log(project);

  const projectIndex = parseInt(project as string); //parseInt es una funcion de typescript para convertir strings a numeros

  if (project === undefined || isNaN(projectIndex) || projectIndex > projects.length) {
    return <div>Project does not exist</div>;
  }
  const { id, description, title, githubLink, imageUrl, technologies, liveDemoLink } = projects[projectIndex];
  console.log(projects[projectIndex]);

  return (
    <div>
      <div>
        <h1>ProjectDetailsPage</h1>
      </div>
      <div className="text-2xl font-bold">{title}</div>
    </div>
  );
}
export default ProjectDetailsPage;
