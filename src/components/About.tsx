const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-accent)' }}></div>
        </div>

        <div className="glass-card p-8 lg:p-12 rounded-3xl slide-up">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Hello! I'm Bii, a passionate <strong>Web Developer</strong> and <strong>Data Analyst</strong> 
              with over 4 years of experience in creating interactive web applications and extracting 
              valuable insights from data.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              I thrive at the intersection of technology and data, developing solutions that not only 
              look good but also perform well. My skillset spans across multiple languages and tools, 
              including JavaScript, Python, React, SQL, Power BI, and more.
            </p>
            
            <p className="text-lg leading-relaxed">
              I'm also experienced in data scraping, machine learning, and visualizing complex datasets. 
              I believe in creating digital experiences that are both beautiful and functional, backed 
              by data-driven insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;