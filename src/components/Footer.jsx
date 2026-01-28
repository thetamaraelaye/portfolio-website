import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-purple-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex space-x-6">
          <a
            href="mailto:tamaraelaye@gmail.com"
            className="hover:text-purple-300 transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/thetamaraelaye"
            className="hover:text-purple-300 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/tamara-elaye"
            className="hover:text-purple-300 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-purple-200">
          © 2026 Tamara Elayelagha. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
