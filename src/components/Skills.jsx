import { Server, Database, Globe, Terminal, Cpu, Code } from 'lucide-react';

const Skills = () => {
  // Definimos las categorías y tecnologías
  const skillCategories = [
    {
      title: "Backend Core",
      icon: <Server className="text-accent" size={24} />,
      skills: ["Java", "Spring Boot", "Node.js", "Express", "RESTful APIs", "Microservices"]
    },
    {
      title: "Base de Datos",
      icon: <Database className="text-accent" size={24} />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "JPA / Hibernate"]
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="text-accent" size={24} />,
      skills: ["Docker", "Git / GitHub", "Linux CLI", "Maven/Gradle", "CI/CD Basics"]
    },
    {
      title: "Frontend & Otros",
      icon: <Globe className="text-accent" size={24} />,
      skills: ["React", "Tailwind CSS", "HTML/CSS", "Postman", "Swagger"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Arsenal <span className="text-accent">Técnico</span>
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          Herramientas y tecnologías que utilizo para construir infraestructuras digitales robustas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-dark-surface p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                {category.icon}
              </div>
              <h3 className="font-bold text-lg">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="text-sm px-3 py-1 rounded-full bg-white/5 text-text-muted border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;