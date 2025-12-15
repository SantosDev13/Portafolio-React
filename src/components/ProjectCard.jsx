import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <article className="group bg-dark-surface rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 flex flex-col md:flex-row h-full">
      
      {/* 1. SECCIÓN VISUAL (Izquierda/Arriba) */}
      <div className="md:w-2/5 relative min-h-[200px] md:min-h-full overflow-hidden bg-slate-800">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Placeholder por defecto si no hay imagen: Un degradado técnico */
          <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
             <div className="text-8xl opacity-5 select-none font-mono font-bold">API</div>
          </div>
        )}
        
        {/* Overlay gradiente para unificar */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent md:bg-gradient-to-r opacity-60"></div>
      </div>

      {/* 2. SECCIÓN DE CONTENIDO (Derecha/Abajo) */}
      <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
        
        {/* Encabezado */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-text-muted mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Lista de Características (Lo que vende tu Backend) */}
        <div className="mb-6 space-y-2">
          <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">Key Features:</h4>
          <ul className="grid grid-cols-1 gap-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-text-muted">
                <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags y Botones (Parte Inferior) */}
        <div className="mt-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          
          {/* Stack Tecnológico */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-accent/10 text-accent border border-accent/20">
                {tag}
              </span>
            ))}
          </div>

          {/* Enlaces */}
          <div className="flex gap-3">
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white transition-colors text-text-muted"
                title="Ver Código en GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {project.links.demo && (
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white transition-colors text-text-muted"
                title="Ver Demo / Swagger"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

      </div>
    </article>
  );
};

export default ProjectCard;