import { Mail, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "luis.santos@example.com"; // ¡Pon tu correo real aquí!

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para colaborar?
        </h2>
        <p className="text-text-muted text-lg mb-12 max-w-2xl mx-auto">
          Actualmente estoy disponible para nuevas oportunidades como Backend Developer. 
          Si buscas arquitectura limpia y código eficiente, conversemos.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          
          {/* Tarjeta de Email con botón de copiar */}
          <div className="group bg-dark-surface p-1 rounded-xl border border-white/10 hover:border-accent/50 transition-all flex items-center">
            <div className="px-6 py-4 flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">Email Me</p>
                <p className="text-white font-mono text-lg">{email}</p>
              </div>
            </div>
            <button 
              onClick={handleCopy}
              className="p-4 border-l border-white/10 hover:bg-white/5 h-full flex items-center justify-center transition-colors rounded-r-xl"
              title="Copiar correo"
            >
              {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} className="text-text-muted" />}
            </button>
          </div>

          {/* Botón LinkedIn */}
          <a 
            href="https://linkedin.com/in/tu-usuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-[#0077b5] hover:bg-[#006396] text-white px-8 py-5 rounded-xl font-medium transition-all flex items-center gap-3 shadow-lg hover:shadow-[#0077b5]/30"
          >
            <Linkedin size={24} />
            <span>Conectar en LinkedIn</span>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;