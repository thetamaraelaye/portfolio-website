import PropTypes from "prop-types";

const ExperienceCard = ({
  role,
  company,
  period,
  description,
  achievements,
}) => (
  <div className="bg-white rounded-xl shadow-lg p-8 mb-6 hover:shadow-xl transition-all duration-300">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-bold text-purple-900">{role}</h3>
        <p className="text-purple-600 text-lg">{company}</p>
      </div>
      <p className="text-gray-600 mt-2 md:mt-0">{period}</p>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    <ul className="space-y-3 text-gray-600">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-start">
          <span className="text-purple-500 mr-2">•</span>
          {achievement}
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;

ExperienceCard.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  period: PropTypes.string,
  description: PropTypes.string,
  achievements: PropTypes.arrayOf(PropTypes.string),
};
