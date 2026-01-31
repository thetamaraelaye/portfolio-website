const TechnicalWriting = () => {
  const articles = [
    {
      title: "Linguaspan API Documentation",
      link: "https://github.com/thetamaraelaye/linguaspan-api-docs",
      desc: "Comprehensive API documentation for the speech transcription platform. Created developer-friendly MD files for handover, Swagger docs integration, and Postman collections. Built with Python, FastAPI, Swagger/OpenAPI specs, and HTTPS security protocols.",
      skills: ["Python", "FastAPI", "Swagger/OpenAPI", "Postman", "Technical Writing"],
      github: "https://github.com/thetamaraelaye/linguaspan-api-docs",
    },
    {
      title: "How to Scrape G2 Reviews with Residential Proxies",
      link: "https://clippingsme-assets-1.s3.amazonaws.com/cuttingpdfs/1993705/977bd3cc17352bdaf4305126d527bd43.pdf?",
      desc: "Developer guide for web scraping G2 reviews using Node.js, Axios for HTTP requests, and Puppeteer for browser automation. Includes WordPress integration examples and proxy rotation techniques.",
      skills: ["Node.js", "Axios", "Puppeteer", "WordPress", "Technical Writing"],
      github: "https://github.com/thetamaraelaye/g2-scraper-tutorial",
    },
    {
      title: "Building a Disinformation Detector for Facebook Groups",
      link: "https://thesocialproxy.com/2024/09/23/how-to-build-a-disinformation-detector-for-facebook-groups/",
      desc: "Technical implementation guide using Node.js, Axios, and Puppeteer for automated content analysis. Includes API documentation and developer handover materials for misinformation detection algorithms.",
      skills: ["Node.js", "Axios", "Puppeteer", "Technical Writing"],
      github: "https://github.com/thetamaraelaye/disinformation-tool",
    },
    {
      title: "Revolutionising Farming Support: The National Hotline for Agriculture",
      link: "https://www.crop2cash.com.ng/blog/revolutionising-farming-support-the-national-hotline-for-agriculture-243",
      desc: "Technical documentation for Crop2Cash's agricultural support systems. Created using custom CMS with developer-friendly MD files, API documentation, and handover materials for the National Agriculture Hotline.",
      skills: ["Content Management Systems", "Technical Writing", "API Documentation"],
    },
    {
      title: "9 Amazing Facts About Smallholder Farmers in Nigeria",
      link: "https://www.crop2cash.com.ng/blog/235",
      desc: "Data-driven content created with custom CMS tools. Includes technical documentation and developer resources for agricultural data visualization and farmer support systems.",
      skills: ["Content Management Systems", "Technical Writing", "Data Visualization"],
    },
    {
      title: "Insider: Building Accessible and Inclusive Products for Smallholder Farmers",
      link: "https://www.crop2cash.com.ng/blog/insider-building-accessible-and-inclusive-products-for-smallholder-farmers-in-nigeria-a-software-developers-perspective-237",
      desc: "Technical perspective on accessibility in agricultural software. Documented using custom CMS with comprehensive API docs, developer handover materials, and inclusive design principles.",
      skills: ["Content Management Systems", "Technical Writing", "API Documentation", "Accessibility"],
    },
    {
      title: "Bridging the Digital Divide: How Crop2Cash is Using USSD",
      link: "https://www.crop2cash.com.ng/blog/bridging-the-digital-divide-how-crop2cash-is-using-ussd-to-empower-smallholder-farmers-in-nigeria-234",
      desc: "Technical implementation guide for USSD technology in agriculture. Created with custom CMS, including API documentation, developer resources, and handover materials for USSD integration.",
      skills: ["Content Management Systems", "Technical Writing", "API Documentation", "USSD"],
    },
    {
      title: "Farm Inputs: The Essential Ingredient of Successful Farming",
      link: "https://www.crop2cash.com.ng/blog/farm-inputs-the-essential-ingredient-of-successful-farming-230",
      desc: "Agricultural technology content developed using custom CMS. Includes technical documentation, API resources, and developer-friendly materials for farming input management systems.",
      skills: ["Content Management Systems", "Technical Writing", "API Documentation"],
    },
  ];

  return (
    <section id="technical-writing" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Writing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <div key={a.title} className="p-6 border rounded-lg hover:shadow-lg flex flex-col h-full">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{a.title}</h3>
              <p className="text-gray-600 mb-3">{a.desc}</p>
              {a.skills && a.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {a.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-4 border-t border-gray-200">
                  <div className="flex flex-row items-center justify-center gap-4">
                  {a.github && (
                    <a href={a.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-600 hover:text-purple-800">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View Code</span>
                    </a>
                  )}

                  <a href={a.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">Read article</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalWriting;
