import { Server, Database, Globe, Terminal, Cpu } from 'lucide-react';
import { FaJava } from 'react-icons/fa'; // Java desde FontAwesome
import { 
  SiSpringboot, SiPostgresql, SiMongodb, SiRedis, SiDocker, 
  SiGit, SiLinux, SiReact, SiTailwindcss, SiPostman, SiApachemaven, 
  SiNodedotjs, SiExpress, SiHibernate,SiPython, SiPhp, SiMysql
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Core",
      icon: <Server className="text-accent" size={24} />,
      techs: [
        
        { name: "Java", icon: <FaJava size={80} className="text-red-500" /> },
        
        { name: "Spring Boot", icon: <SiSpringboot size={80} className="text-green-500" /> },
        
        { name: "Python", icon: <SiPython size={80} className="text-yellow-500" /> },
        
        { name: "Php", icon: <SiPhp size={80} className="text-[#777BB3] text-3xl font-bold" /> },
        
        { name: "Microservices", icon: <Cpu size={80} className="text-blue-400" /> }
      ]
    },
    {
      title: "Base de Datos",
      icon: <Database className="text-accent" size={24} />,
      techs: [
        
        { name: "PostgreSQL", icon: <SiPostgresql size={80} className="text-blue-400" /> },
        
        { name: "MongoDB", icon: <SiMongodb size={80} className="text-green-500" /> },
        
        { name: "MySQL", icon: <SiMysql size={80} className="text-blue-500" /> },
        
        { name: "Hibernate", icon: <SiHibernate size={80} className="text-yellow-600" /> }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="text-accent" size={24} />,
      techs: [
        
        { name: "Docker", icon: <SiDocker size={80} className="text-blue-500" /> },
        
        { name: "Git", icon: <SiGit size={80} className="text-orange-600" /> },
        
        { name: "Linux", icon: <SiLinux size={80} className="text-yellow-500" /> },
        
        { name: "Maven", icon: <SiApachemaven size={80} className="text-red-700" /> }
      ]
    },
    {
      title: "Frontend & Otros",
      icon: <Globe className="text-accent" size={24} />,
      techs: [
        
        { name: "React", icon: <SiReact size={80} className="text-cyan-400" /> },
        
        { name: "Tailwind CSS", icon: <SiTailwindcss size={80} className="text-cyan-500" /> },
        
        { name: "Postman", icon: <SiPostman size={80} className="text-orange-500" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Arsenal <span className="text-accent">Técnico</span>
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          Stack tecnológico enfocado en rendimiento, escalabilidad y seguridad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-dark-surface p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                {category.icon}
              </div>
              <h3 className="font-bold text-xl text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-8 justify-start">
              {category.techs.map((tech, idx) => (
                <div key={idx} className="group relative flex flex-col items-center">
                  
                  {/* ICONO: Sin grayscale, con efecto de brillo (drop-shadow) al hover */}
                  <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] cursor-pointer">
                    {tech.icon}
                  </div>

                  {/* Tooltip simple */}
                  <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-dark-bg text-xs font-bold px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10">
                    {tech.name}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;