const Websites = () => {
  const sites = [
    {
      title: "Palremit",
      link: "https://www.palremit.com/",
      desc: "Global payment platform (WordPress-based site).",
      skills: ["Next.js", "React.js", "TailwindCSS", "TypeScript"],
      image: "/websites/palremit-hero.png",
      alt: "Palremit homepage showing global payment platform with crypto and fiat transfer features",
    },
    {
      title: "Palremit Help Site",
      link: "https://help.palremit.com/",
      desc: "Documentation and help site for Palremit.",
      skills: ["WordPress",  "Elementor", "Elementor Pro", "Content Management Systems", "Technical Writing"],
      image: "/websites/palremit-help.png",
      alt: "Palremit help center showing documentation and support categories",
    },
    {
      title: "Linguaspan",
      link: "https://www.linguaspanapp.com/",
      desc: "Full product — speech transcription platform.",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "Supabase", "Swagger/OpenAPI", "Postman"],
      image: "/websites/linguaspan-hero.png",
      alt: "Linguaspan transcription platform showing African language support and AI-powered speech recognition",
    },
     {
      title: "MoneSave Website",
      link: "https://monesave.com",
      desc: "Rebuilt with WordPress and Hostinger.",
      skills: ["WordPress", "Hostinger", "Content Management Systems", "React", "JavaScript", "Tailwind CSS",],
      image: "/websites/monesave-hero.png",
      alt: "MoneSave website showing smart payment rings and financial technology platform",
    },
    {
      title: "Crop2Cash Corporate Website",
      link: "https://www.crop2cash.com.ng/",
      desc: "Enhanced corporate website with integrated blog system and dynamic forms for Nigeria's leading agricultural technology platform.",
      skills: ["Next.js", "UI Design", "User Experience", ],
      image: "/websites/crop2cash-hero.png",
      alt: "Crop2Cash corporate website showing agricultural technology platform for farmers",
    },
    {
      title: "Palremit Blog Site",
      link: "https://blog.palremit.com/",
      desc: "Palremit blog site built with WordPress and Hostinger.",
      skills: ["WordPress", "Hostinger", "Content Management Systems", "Technical Writing"],
      image: "/websites/palremit-blog-hero.png",
      alt: "Palremit blog showing financial technology articles and cryptocurrency insights",
    },
  ];

  return (
    <section id="web-development" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Websites & Apps</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sites.map((s) => (
            <div key={s.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
              {/* Image at top */}
              {s.image && (
                <img
                  src={s.image}
                  alt={s.alt || s.title}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 mb-3">{s.desc}</p>
                {s.skills && s.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* See More button at bottom */}
              <div className="mt-auto pt-4 border-t border-gray-200">
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-800 transition-colors bg-purple-50 px-4 py-2 rounded-lg w-full"
                >
                  <span>Visit Site</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Websites;
