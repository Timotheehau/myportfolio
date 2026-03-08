
export default function SkillSection() {
  const skills = [
    {
      category: "Front-end",
      items: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    },
    {
      category: "Back-end",
      items: ["Node.js", "Symfony", "Apache", "SQL", "Docker"],
    },
    {
      category: "Outils & Méthodologies",
      items: ["Git/GitHub", "JetBrain Toolbox", "DataGrip", "PhpStorm", "VS Code", "Figma", "Postman"],
    },
  ];
  return (
    <section id="Skills">
      <div className="content-wrapper">
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
