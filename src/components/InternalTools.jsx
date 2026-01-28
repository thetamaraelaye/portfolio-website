import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";

const ToolCard = ({ tool }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-6 bg-gray-50 rounded-lg border">
      <h3 className="text-lg font-semibold text-purple-800 mb-2">{tool.title}</h3>
      {tool.skills && tool.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tool.skills.map((skill) => (
            <span
              key={skill}
              className="bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
      <p className="text-gray-600 mb-3">{tool.desc}</p>

      {showDetails && tool.details && (
        <div className="mb-3 p-3 bg-purple-50 rounded border border-purple-200">
          <h4 className="font-medium text-purple-900 mb-2">Project Details</h4>
          <p className="text-gray-700 text-sm mb-2">{tool.details}</p>
          {tool.achievements && tool.achievements.length > 0 && (
            <div>
              <h5 className="font-medium text-purple-900 mb-1">Key Achievements</h5>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {tool.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        {tool.details && (
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm"
          >
            {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {showDetails ? 'See Less' : 'See More'}
          </button>
        )}
      </div>
    </div>
  );
};

ToolCard.propTypes = {
  tool: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.string,
    achievements: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const InternalTools = () => {
  const tools = [
    {
      title: "Sense AI Hotline Dashboard",
      desc: "Internal dashboard to monitor incoming USSD hotline requests and route support for smallholder farmers.",
      skills: ["React", "TypeScript", "USSD", "Dashboard Development"],
      details: "Advanced internal dashboard system for monitoring and managing USSD-based agricultural support hotline. Features real-time request tracking, automated routing to support agents, performance analytics, and integration with AI-powered response systems. Built to handle high-volume farmer inquiries across multiple regions.",
      achievements: [
        "Built the authentication and authorization system for internal users",
        "Implemented automated support routing algorithms",
      ]
    },
    {
      title: "Sharp CRM Tool",
      desc: "Internal tools to manage over 500,000 farmer activities and all internal operations.",
      skills: ["React", "Customer relationship Management Systems", "Admin Tools"],
      details: "Sophisticated content management platform for internal documentation and knowledge base systems. Features include multi-user editing, version control, automated publishing workflows, and integration with help desk systems. Designed to streamline content creation and maintenance processes across large organizations.",
      achievements: [
        "Added RBAC permissions for different user roles",
        "Implemented RBAC to key freatures on the application",
      ]
    },
    {
      title: "Project SCM - Supply Chain Management Application",
      desc: "Prototype supply chain management application developed for final year project (Grade: A).",
      skills: ["Next.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Redux", "Axios"],
      details: "Full-featured Supply Chain Management platform prototype that revolutionized operations between suppliers and logistics intermediaries. The application features comprehensive order tracking, inventory management, supplier coordination, and real-time analytics. Built with scalable architecture supporting high-volume transactions and complex workflow automation.",
      achievements: [
        "Designed and developed responsive SCM application prototype",
        "Built scalable backend using Node.js, Express.js, and MongoDB",
        "Developed user-centric frontend with Next.js and TailwindCSS",
        "Conducted user research leading to 80% improvement in user satisfaction",
        "Achieved Grade A for final year project submission"
      ]
    },
  ];

  return (
    <section id="internal-tools" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Internal Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tools.map((t) => (
            <ToolCard key={t.title} tool={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalTools;
