import { projects } from "@/utils/projectData";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router";

function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h3 className="text-2xl font-bold mt-5 mb-5">Web Development Projects</h3>

      <p className="text-lg p-10">
        This section is dedicated to showcase some of the projects I've worked on. During the Web Development bootcamp, I had the opportunity to
        create 3 projects that demonstrate my skills and creativity in web development. Each project represents a unique challenge and learning
        experience, allowing me to apply the knowledge I've gained throughout the course. From building responsive websites to developing interactive
        applications, these projects reflect my passion for coding and my commitment to continuous learning in the field of web development.
      </p>

      {/* LINK TO PROJECT 1 */}
      {projects.map((project) => (
        <Card className="max-w-md mb-5" imgAlt="Interfaz Screenshot" imgSrc={project.imageCover}>
          <h5 className="text-3xl font-bold flex items/center justify-center tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
          <Link to={`/projects/${project.id}`} key={project.id} className="w-full">
            <Button className="mt-2 w-full flex items-center justify-center text-2xl font-normal" style={{ backgroundColor: "#581c87" }}>
              {project.title}
            </Button>
          </Link>
          <Link
            className="font-normal w-full flex items-center justify-center text-gray-700 dark:text-gray-400"
            to={`/projects/${project.githubLink}/github`}
          >
            Github
          </Link>
        </Card>
      ))}
      {/* LINK TO PROJECT 2 */}
      {/* LINK TO PROJECT 3 */}
    </div>
  );
}
export default ProjectsPage;
