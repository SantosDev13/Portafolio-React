import { Terminal, ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Lado Izquierdo: Texto Introductorio */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-accent font-mono text-sm tracking-wide">
            <span className="text-xl">👋</span> 
            <span>HELLO WORLD</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Luis <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Santos</span>
          </h1>
          
          <h2 className="text-2xl text-text-muted font-light">
            Backend Developer & Java Specialist
          </h2>
          
          <p className="text-text-muted max-w-lg text-lg leading-relaxed">
            Arquitecto soluciones escalables y seguras. Especializado en construir el motor invisible que hace funcionar las aplicaciones modernas.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="group bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all flex items-center gap-2"
            >
              Ver Proyectos 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            
            <div className="flex gap-4 items-center px-4">
              <a href="#" className="text-text-muted hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-text-muted hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Terminal Simulada */}
        <div className="relative group">
          {/* Efecto de brillo/resplandor detrás de la terminal */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-dark-surface rounded-lg border border-white/10 shadow-2xl overflow-hidden">
            {/* Barra de título de la ventana */}
            <div className="bg-slate-900/50 px-4 py-2 border-b border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
                <Terminal size={12} />
                bash — luis@server
              </div>
            </div>

            {/* Contenido de la terminal */}
            <div className="p-6 font-mono text-sm md:text-base space-y-4">
              
              <div className="flex gap-2 text-green-400">
                <span>➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">whoami</span>
              </div>
              
              <div className="text-text-muted pl-4">
                "Luis Santos | Backend Developer"
              </div>

              <div className="flex gap-2 text-green-400">
                <span>➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">cat skills.json</span>
              </div>

              <div className="text-yellow-300 pl-4">
                {`{`}
                <div className="pl-4">
                  <span className="text-purple-400">"languages"</span>: [<span className="text-green-300">"Java"</span>, <span className="text-green-300">"JavaScript"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">"frameworks"</span>: [<span className="text-green-300">"Spring Boot"</span>, <span className="text-green-300">"React"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">"database"</span>: [<span className="text-green-300">"PostgreSQL"</span>, <span className="text-green-300">"MongoDB"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">"status"</span>: <span className="text-green-300">"Ready to work 🚀"</span>
                </div>
                {`}`}
              </div>

              <div className="flex gap-2 text-green-400">
                <span>➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">
                  <span className="w-2 h-4 bg-white inline-block animate-blink align-middle"></span>
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;