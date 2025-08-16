import { Code, Database, BarChart3, Globe, Server, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Web Development",
      skills: [
        "JavaScript (React, Node.js & Vue.js)",
        "HTML5 / CSS3 / SASS",
        "Django, Flask & Laravel",
        "Responsive Design",
        "REST APIs",
        "Linux",
        "Version Control (Git, GitHub)",
        "Docker (docker, docker-compose)"
      ]
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      skills: [
        "Python (Pandas, NumPy)",
        "SQL / MySQL / PostgreSQL",
        "Power BI / Tableau & Power Query",
        "Data Scraping (BeautifulSoup)",
        "Machine Learning (scikit-learn)",
        "Statistical Analysis",
        "Data Visualization",
        "ETL Processes"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-accent)' }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card slide-up">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-2xl mr-4" style={{ background: 'var(--gradient-accent)' }}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">{skill}</span>
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

export default Skills;