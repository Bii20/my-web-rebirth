import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "PROTO ENERGY LTD",
      period: "2023 - Present",
      description: "Led data analysis projects, built dashboards, and provided actionable insights using large datasets.",
      highlights: [
        "Developed comprehensive data dashboards using Power BI",
        "Automated data collection processes",
        "Improved data accuracy by 40%",
        "Provided strategic insights for business decisions"
      ]
    },
    {
      title: "Web Developer",
      company: "TECHIMP TECHNOLOGIES",
      period: "2019 - 2023",
      description: "Developed web applications, optimized performance, and integrated third-party APIs for clients in various industries.",
      highlights: [
        "Built responsive web applications using React and Vue.js",
        "Integrated REST APIs and third-party services",
        "Optimized application performance by 60%",
        "Mentored junior developers and led project teams"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Career <span className="gradient-text">Highlights</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-accent)' }}></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card p-8 rounded-3xl hover-glow slide-up">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-xl text-accent mb-2">{exp.company}</p>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="space-y-3">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;