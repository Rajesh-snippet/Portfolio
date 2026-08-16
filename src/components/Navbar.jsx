function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-zinc-950 border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        
        <div className="text-xl font-bold text-lime-400">
          RAJESH
        </div>

        <div className="flex gap-8">
          <a href="#about" className="text-zinc-400 hover:text-lime-400">
            About
          </a>

          <a href="#skills" className="text-zinc-400 hover:text-lime-400">
            Skills
          </a>

          <a href="#projects" className="text-zinc-400 hover:text-lime-400">
            Projects
          </a>

          <a href="#contact" className="text-zinc-400 hover:text-lime-400">
            Contact
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;