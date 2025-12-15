import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Proyectos <span className="text-accent">Destacados</span>
        </h2>
        <p className="text-text-muted max-w-2xl">
          Implementaciones reales de arquitectura de software, desde APIs RESTful hasta sistemas distribuidos.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;