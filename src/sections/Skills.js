
export default function SkillSection() {
  const skills = [
    {
      category: "Front-end",
      icon: "💻",
      items: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    },
    {
      category: "Back-end",
      icon: "🛠️",
      items: ["Node.js", "Symfony", "Apache", "SQL", "Docker"],
    },
    {
      category: "Outils & Méthodologies",
      icon: "⚙️",
      items: ["Git/GitHub", "JetBrain Toolbox", "DataGrip", "PhpStorm", "VS Code", "Figma", "Postman"],
    },
  ];

  return (
    <section id="Skills" className="skills-section">
      <div className="container">
        <h2>Compétences</h2>
        <div className="cards-grid">
          {skills.map((skill) => (
            <div key={skill.category} className="card-gradient">
              <h3>
                <span className="icon">{skill.icon}</span> {skill.category}
              </h3>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
