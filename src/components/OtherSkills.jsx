import PropTypes from "prop-types";

const OtherSkills = ({ skills }) => (
  <section className="py-12 lg:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Other Skills & Tools</h2>
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
    </div>
  </section>
);

export default OtherSkills;

OtherSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};