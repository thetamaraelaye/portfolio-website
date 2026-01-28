import { X, Github, ExternalLink, Apple, Smartphone } from "lucide-react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-4">
            {project.image && (
              <img
                src={project.image}
                alt={project.alt || project.title}
                loading="lazy"
                className="w-16 h-16 rounded-lg object-cover"
              />
            )}
            <div>
              <h2 className="text-2xl font-bold">{project.title}</h2>
              {project.category && (
                <span className="text-sm font-medium bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">{Array.isArray(project.description) ? project.description.join(' ') : project.description}</p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech?.map((tech) => (
                <span
                  key={tech}
                  className="bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details */}
          {project.details && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Project Details</h3>
              <p className="text-gray-700">{project.details}</p>
            </div>
          )}

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {project.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors bg-purple-50 px-4 py-2 rounded-lg"
              >
                <Github size={20} />
                <span>View Code</span>
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors bg-purple-50 px-4 py-2 rounded-lg"
              >
                <ExternalLink size={20} />
                <span>Live Site</span>
              </a>
            )}

            {project.platforms?.map((p) => {
              const Icon = p.name === "App Store" ? Apple : p.name === "Play Store" ? Smartphone : null;
              return (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {Icon && <Icon size={16} />}
                  {p.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
    project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    details: PropTypes.string,
    achievements: PropTypes.arrayOf(PropTypes.string),
    tech: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
    live: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    platforms: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })
    ),
  }).isRequired,
};

export default Modal;