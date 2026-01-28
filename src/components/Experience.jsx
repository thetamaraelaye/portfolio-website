import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
  
    {
      role: "Frontend Software Engineer",
      company: "Palremit Limited",
      period: "May 2024 - Present",
      description:
        "Developing admin dashboards, redesigning websites, and implementing email marketing templates.",
      achievements: [
        "Developed an admin dashboard with role-based access using React.js, Next.js, and TypeScript, increasing visibility of transactions by 100%",
        "Redesigned company website and created support subdomain, improving SEO by 40% and reducing support tickets by 50%",
        "Designed email templates with HTML, CSS, and Postmark for better branding",
      ],
    },
    {
      role: "Frontend Software Engineer",
      company: "Crop2Cash Limited",
      period: "February 2023 - January, 2026",
      description:
        "Led development of internal systems, enhanced stability, and developed authentication modules.",
      achievements: [
        "Led development of HR payroll and management system using React.js and TailwindCSS, increasing productivity by 600%",
        "Enhanced system stability by 90% through maintenance and bug fixes",
        "Developed authentication module for AI intent library supporting National Agriculture Hotline",
      ],
    },
  {
      role: "Fullstack Engineer",
      company: "Linguaspan Limited",
      period: "July 2025 - September 2025",
      description:
        "Built an AI-powered transcription platform for African-accented English, French, and Yoruba.",
      achievements: [
        "Developed the backend with FastAPI (Python), Supabase, and Swagger docs, integrated with Hugging Face AI/ML models",
        "Created a responsive Next.js, React, TypeScript, TailwindCSS frontend with secure auth, file upload, and user role management",
        "Implemented Zustand for state management and React Query for data fetching",
        "Collaborated on building a comprehensive speech transcription solution for diverse African languages",
      ],
    },
     {
      role: "Technical Writer",
      company: "The Social Proxy",
      period: "September, 2024 - December, 2024",
      description:
        "Researched, wrote, and published technical articles and tutorials on web scrapping using residential proxies for the Social Proxy blog.",
      achievements: [
        "Wrote tutorials on web scraping and building detectors",
        "Created content for social proxy and AI/ML applications",
        "Developed documentation and guides for software products",
      ],
    },
    {
      role: "Technical Writer",
      company: "Crop2Cash Limited",
      period: "February 2022 - August 2023",
      description:
        "Researched, wrote, and published technical articles for the Crop2Cash blog.",
      achievements: [
        "Developed SEO-driven content increasing online visibility by 33%",
        "Created high-ranking articles securing top Google SERP positions",
        "Utilized tools like Google Docs, Canva, Pinterest, and CMS for engaging content",
      ],
    },
    {
      role: "Technical Support",
      company: "LXX Technologies",
      period: "January 2022 - October 2022",
      description:
        "Conducted quality assessments, installed operating systems, and led sales efforts.",
      achievements: [
        "Conducted quality assessments on 3,000+ new stock items, reducing defect rates",
        "Installed and reloaded OS on 1,000+ systems, improving performance",
        "Led sales generating over ₦250,000 in profit",
      ],
    },
    // {
    //   role: "Freelance Technical Writer",
    //   company: "Self-Employed",
    //   period: "2023 - Present",
    //   description:
    //     "Providing technical writing services, tutorials, and ghostwriting for various clients.",
    //   achievements: [
    //     "Wrote tutorials on web scraping and building detectors",
    //     "Created content for social proxy and AI/ML applications",
    //     "Developed documentation and guides for software products",
    //   ],
    // },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}

          <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Education</h3>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium text-gray-800">
                  B.Sc. in Industrial Engineering
                </p>
                <p className="text-gray-600">
                  Focused on building systems, streamlining processes, and establishing structures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
