import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-[#0f0f1b] to-[#1c1c2e] text-white shadow-md py-4 px-6 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-2xl font-bold text-white">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-200 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-200 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-200 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-200 hover:text-white transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/rajeshSharma07" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/rajesh-sharma-16b961288/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
           
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-3">
              <a href="#about" className="text-gray-200 hover:text-white" onClick={() => setIsOpen(false)}>About</a>
              <a href="#skills" className="text-gray-200 hover:text-white" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#projects" className="text-gray-200 hover:text-white" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact" className="text-gray-200 hover:text-white" onClick={() => setIsOpen(false)}>Contact</a>
              <div className="flex space-x-4 py-2">
                <a href="https://github.com/rajeshSharma07" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/rajesh-sharma-16b961288/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
              
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
