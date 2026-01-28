import PropTypes from "prop-types";

const Skills = ({ skills }) => (
  <section id="skills" className="py-20 container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full text-lg"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skills;
