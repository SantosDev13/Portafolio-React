const Footer = () => {
  return (
    <footer className="bg-dark-surface/50 border-t border-white/5 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-text-muted text-sm">
        
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} Luis Santos. Built with React & Tailwind v4.
        </p>

        <div className="flex gap-6">
          <a href="https://github.com/tu-usuario" className="hover:text-accent transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/tu-usuario" className="hover:text-accent transition-colors">LinkedIn</a>
          {/* Si tuvieras un blog técnico, iría aquí */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;