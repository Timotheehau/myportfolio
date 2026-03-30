const journey = [
    {
        title: "Bac Sciences et Technologies de laboratoire",
        date: "2017 - 2020",
        org: "Lycée Viollet le Duc",
        desc: "Bac technologique avec une spécialisation en biotechnologies",
        image: "/islands/romancedawn.webp"
    },
    {
        title: "Adjoint d'animation",
        date: "08/2020 - 09/2023",
        org: "Mairie de Plaisir",
        desc: "Encadrement d'enfants, organisation d'activités ludiques et éducatives",
        image: "/islands/baratie.webp"
    },        
    {
        title: "Etudiant développeur fullstack",
        date: "2023 - 2024",
        org: "IPSSI SQY",
        desc: "Première année de BTS SIO SLAM | Bases du développement et Validation des socles techniques nécessaires à la spécialisation SLAM",
        comp: "HTML/CSS, PHP, SQL, Github, UML, MERISE, Postman, JavaScript, MariaDB",
        image: "/islands/laughtale.png"
    },
    {
        title: "Stagiaire développeur web",
        date: "03/2024 - 05/2024",
        org: "Bouygues Telecom",
        desc: "Mise en place d’un profil Kids sur l’application de télévision B.TV | Résolution d’issues sur l’application de télévision B.TV / Mauvais affichages, mauvais comportement | Ajout de features sur l’application de télévision B.TV (carrousel, timer decomplétion)",
        comp: "HTML/CSS, React, Node, Postman, JWT token, MariaDB, MySQL, Apache, PhpMyAdmin, Figma",
        image: "/islands/littlegarden.png"
    },
    {
        title: "Equipier polyvalent",
        date: "03/2024 - 06/2024",
        org: "McDonald's",
        desc: "Service en salle et au drive, préparation des commandes, cuisson des steaks, maintien de la propreté du restaurant",
        image: "/islands/alabasta.webp"
    },
    {
        title: "Adjoint d'animation",
        date: "12/2024 - 08/2025",
        org: "Mairie de Plaisir",
        desc: "Encadrement d'enfants, organisation d'activités ludiques et éducatives",
        image: "/islands/skypiea.png"
    },
    {
        title: "Etudiant développeur fullstack",
        date: "09/2025 - 07/2026",
        org: "IPSSI SQY",
        desc: "Deuxième année de BTS SIO SLAM | Spécialisation en développement d'applications | Réalisation de plusieurs projets tout au long de l'année",
        comp: "React, React Native, Node, Tailwind, Symfony, MySQL, Travaille en mode projet, Postman, Github, Gestion de sécurités, Documentations, Tokens, OpenApi, Docker, Figma, DataGrip",
        image: "/islands/waterseven.png"
    },
    {
        title: "Apprenti développeur web",
        date: "09/2025 - 07/2026",
        org: "C'Chartres Innovations du Numérique",
        desc: "Alternance au sein de C'CIN en tant qu'apprenti développeur web | Tout simplement la meilleure expérience que l'on puisse avoir en tant qu'étudiant",
        comp: "Symfony, React, Vite, Git, Datagrip, Docker, Travailler en mode projet, Méthode Scrum, Gérer le patrimoine informatique",
        image: "/islands/enieslobby.webp"
    }
];

export default function About() {
  return (
    <section id="about">
        <div className="content-wrapper">
            <h2>Mon Parcours</h2>
            <div className="about-cards-grid">
                {journey.map((item, i) => (
                    <div
                    key={i}
                    className="about-card"
                    style={{ backgroundImage: `url(${item.image})` }}
                    >
                    <div className="about-overlay">
                        <h3>{item.title}</h3>
                        <br/>
                        <span>{item.date}</span>
                        <p>{item.org}</p>
                        <br/>
                        <p>{item.desc}</p>
                        <br/>
                        <p>{item.comp}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}