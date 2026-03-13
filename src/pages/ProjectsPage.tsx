import { projects } from "@/utils/projectData";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router";

function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black pt-10">
      <h3 className="text-2xl font-bold mt-5 mb-5">Web Development Projects</h3>

      <p className="text-lg py-5 px-5 max-w-3xl text-center">
        This section is dedicated to showcase some of the projects I've worked on. During the Web Development bootcamp, I had the opportunity to
        create 3 projects that demonstrate my skills and creativity in web development. Each project represents a unique challenge and learning
        experience, allowing me to apply the knowledge I've gained throughout the course. From building responsive websites to developing interactive
        applications, these projects reflect my passion for coding and my commitment to continuous learning in the field of web development.
      </p>

      <div className="flex flex-row justify-center gap-8 p-5 bg-cyan-200 dark:text-white rounded-md">
        {projects.map((project) => (
          <div key={project.id} className=" ">
            <Card className="max-w-md h-full" imgAlt={project.title} imgSrc={project.imageCover}>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-md mb-4">{project.description}</p>
              <Link to={`/projects/${project.id}`} className="w-full">
                <Button className="w-full bg-cyan-200 text-lg text-black">View Details</Button>
              </Link>
              <a
                className="w-full block text-center text-purple-600 hover:underline text-sm py-2 mt-2"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProjectsPage;
