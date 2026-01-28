import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-40">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-purple-800">Tamara Elayelagha</div>

        <button
          className="md:hidden p-2 rounded-md text-purple-700"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className={`hidden md:flex space-x-6`}>
          <a href="#web-development" className="text-gray-700 hover:text-purple-700">Web Development</a>
          <a href="#projects" className="text-gray-700 hover:text-purple-700">Projects</a>
          <a href="#technical-writing" className="text-gray-700 hover:text-purple-700">Technical Writing</a>
          <a href="#skills" className="text-gray-700 hover:text-purple-700">Skills</a>
          <a href="#experience" className="text-gray-700 hover:text-purple-700">Experience</a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
            <a href="#technical-writing" className="text-gray-700 hover:text-purple-700" onClick={() => setOpen(false)}>Technical Writing</a>
            <a href="#web-development" className="text-gray-700 hover:text-purple-700" onClick={() => setOpen(false)}>Web Development</a>
            <a href="#projects" className="text-gray-700 hover:text-purple-700" onClick={() => setOpen(false)}>Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-purple-700" onClick={() => setOpen(false)}>Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-purple-700" onClick={() => setOpen(false)}>Experience</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
