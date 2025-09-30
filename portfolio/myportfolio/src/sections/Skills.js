
export default function SkillSection() {
  const skills = [
    {
      category: "Front-end",
      icon: "💻",
      items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    },
    {
      category: "Back-end",
      icon: "🛠️",
      items: ["Node.js", "Express", "MongoDB", "SQL", "REST API"],
    },
    {
      category: "Outils & Méthodologies",
      icon: "⚙️",
      items: ["Git/GitHub", "Scrum/Agile", "VS Code", "Figma", "Postman"],
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
