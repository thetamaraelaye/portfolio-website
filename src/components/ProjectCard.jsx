import { ExternalLink, Apple, Smartphone } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "./Modal";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
        {/* Top content */}
        <div>
          {project.image && (
            <img
              src={project.image}
              alt={project.alt || project.title}
              loading="lazy"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            {project.category && (
              <span className="text-sm font-medium bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                {project.category}
              </span>
            )}
          </div>
          {Array.isArray(project.description) ? (
            <ul className="text-gray-600 mb-6 space-y-2">
              {project.description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 mb-6">{project.description}</p>
          )}
          <div className="flex flex-wrap gap-2 mb-6">
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

        {/* Footer pushed to bottom */}
        <div className="flex gap-4 mt-auto items-center flex-wrap">
          {project.details && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors bg-purple-50 px-4 py-2 rounded-lg"
            >
              <span>See More</span>
            </button>
          )}
        </div>

        {/* Live Site and Platform links at bottom */}
        {(project.live || project.platforms) && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex gap-2 justify-center">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors bg-purple-50 px-3 py-2 rounded-lg text-sm"
                >
                  <ExternalLink size={16} />
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
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors bg-purple-50 px-3 py-2 rounded-lg text-sm"
                  >
                    {Icon && <Icon size={16} />}
                    <span>{p.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
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
