import { useState } from "react";

export default function DocumentationSection() {
    const [showAllE6, setShowAllE6] = useState(false);
    
    const e6Documents = [
        { title: "Diagramme de Gantt", file: "Diagramme_de_Gantt.PNG" },
        { title: "Fichier routes", file: "Fichier_routespdf.pdf" },
        { title: "Diagramme de cas d'utilisation", file: "Cas_dutilisation_User.png" },
        { title: "Cahier des charges", file: "Cahier_des_chargespdf.pdf" },
        { title: "Modèle physique de données", file: "MPDap3.png" },
        { title: "Modèle conceptuel de données", file: "MCDap3.pdf" },
    ];

    const displayedDocs = showAllE6 ? e6Documents : e6Documents.slice(0, 3);

    return (
        <section id="Documentation">
            <div className="content-wrapper">
                <h2>Documentation</h2>
                
                <div className="cards-grid">
                    {/* Carte E5 - Mise à jour pour équilibrer le visuel */}
                    <div className="card">
                        <div className="card-content">
                            <h3>Tableau de synthèse E5</h3>
                            <p>
                                Un tableau englobant la quasi-totalité des projets et mini-projets réalisés : 
                                en école, en stage, en alternance...
                            </p>
                            
                            {/* On utilise la structure docs-list pour remplir l'espace vide */}
                            <div className="docs-list">
                                <div className="doc-item">
                                    <span className="doc-title">Tableau de compétences</span>
                                    <div className="doc-links">
                                        <a href="/assets/TabE5pdF.pdf" target="_blank" rel="noopener noreferrer">
                                            VISUALISER
                                        </a>
                                        <a href="/assets/TabE5pdf.pdf" download>
                                            TÉLÉCHARGER
                                        </a>
                                    </div>
                                </div>
                                {/* Item informatif pour stabiliser la hauteur visuelle */}
                                <div className="doc-item" style={{ border: 'none', background: 'transparent' }}>
                                    <span className="doc-title" style={{ fontSize: '0.85rem', opacity: 0.7, fontStyle: 'italic' }}>
                                        Document de certification officielle
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carte E6 */}
                    <div className="card">
                        <div className="card-content">
                            <h3>Documentation .Match (E6)</h3>
                            <p>
                                Documentation complète incluant les étapes de développement et les solutions apportées.
                            </p>
                            
                            <div className="docs-list">
                                {displayedDocs.map((doc, index) => (
                                    <div key={index} className="doc-item">
                                        <span className="doc-title">{doc.title}</span>
                                        <div className="doc-links">
                                            <a href={`/assets/E6/${doc.file}`} target="_blank" rel="noopener noreferrer">
                                                VISUALISER
                                            </a>
                                            <a href={`/assets/E6/${doc.file}`} download>
                                                TÉLÉCHARGER
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {e6Documents.length > 3 && (
                            <button 
                                className="see-more-btn" 
                                onClick={() => setShowAllE6(!showAllE6)}
                            >
                                {showAllE6 ? "Voir moins ↑" : `Voir plus (${e6Documents.length - 3}) ↓`}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}