import { Puzzle, Plane, Lightbulb } from "lucide-react";

const Interests = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">My Passions</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
          <Puzzle className="mx-auto mb-4 text-purple-600" size={48} />
          <h3 className="text-xl font-bold mb-4">Solving Problems</h3>
          <p className="text-gray-600">
            I thrive on tackling complex challenges and finding innovative solutions through code and creative thinking.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
          <Plane className="mx-auto mb-4 text-purple-600" size={48} />
          <h3 className="text-xl font-bold mb-4">Travel</h3>
          <p className="text-gray-600">
            Exploring new cultures and destinations fuels my curiosity and broadens my perspective on the world.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
          <Lightbulb className="mx-auto mb-4 text-purple-600" size={48} />
          <h3 className="text-xl font-bold mb-4">Trying New Things</h3>
          <p className="text-gray-600">
            I&apos;m always eager to learn new technologies, embrace new experiences, and step outside my comfort zone.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Interests;