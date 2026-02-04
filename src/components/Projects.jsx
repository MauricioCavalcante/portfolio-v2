import './Projects.css';
import logoWhite from "../assets/img/logo-white.png"

const projectsData = [
    {
        id: 1,
        title: "Django PostLab",
        description: "Plataforma SaaS integrada com Hotmart e Ferramentas de IA para gestão de posts e automação de conteúdo.",
        tech: ["Django", "Python", "OpenAI API", "Hotmart Webhooks", "n8n", "PostgreSQL"],
        image: "https://placehold.co/600x400/121212/BC13FE?text=PostLab",
        link: "#"
    },
    {
        id: 2,
        title: "FacilitaHITSS",
        description: "Solução modular (Laravel) para gestão regulatória e de documentos da ANA, com controle de ordens de serviço e relatórios.",
        tech: ["Laravel Modular", "TailwindCSS", "Alpine.js", "Docker"],
        image: "https://placehold.co/600x400/121212/00f3ff?text=Facilita",
        link: "#"
    },
    {
        id: 6,
        title: "ServiceDesk (Perform360)",
        description: "Plataforma de ServiceDesk focada em transcrição de áudio e análise de qualidade de atendimento com IA.",
        tech: ["Laravel", "OpenAI Whisper", "Python", "MySQL"],
        image: "https://placehold.co/600x400/121212/00f3ff?text=Perform360+Audio",
        link: "#"
    },
    {
        id: 3,
        title: "MJF Analytics & Automation",
        description: "Workflows de automação com n8n para análise de dados e integração de agentes de IA.",
        tech: ["n8n", "AI Agents", "Automation", "JSON"],
        image: "https://placehold.co/600x400/121212/BC13FE?text=n8n+Automation",
        link: "#"
    },
    {
        id: 4,
        title: "Maju Ferreira | Consultas",
        description: "Site desenvolvido para a médica Maria Júlia Ferreira para captação de pacientes e gestão de lista de espera.",
        tech: ["React", "CSS", "JavaScript"],
        image: "https://placehold.co/600x400/121212/00f3ff?text=Maju+Ferreira",
        link: "https://majuferreira.com/"
    },
    {
        id: 7,
        title: "Studio Cynthia Ribeiro",
        description: "Landing Page para estúdio de Lash Design. Conta com ficha de anamnese digital e integração com WhatsApp.",
        tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
        image: "https://placehold.co/600x400/121212/BC13FE?text=Studio+Lash",
        link: "#"
    },
    {
        id: 8,
        title: "Chá de Fralda",
        description: "Aplicação React para gestão de chás de bebê. Lista de presentes em tempo real, doações PIX e RSVP digital.",
        tech: ["React.js", "Google Apps Script", "Styled Components", "Serverless"],
        image: "https://placehold.co/600x400/121212/00f3ff?text=Cha+de+Fralda",
        link: "#"
    },
    {
        id: 5,
        title: "Hidro Instrumentação",
        description: "Sistema de controle logístico para a Agência Nacional de Águas (ANA). Gestão de equipamentos, estoque e manutenção.",
        tech: ["AppSheets", "Google Sheets"],
        image: "https://placehold.co/600x400/121212/BC13FE?text=Hidro+Instrumentação",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Projetos</h2>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="card-image">
                            {/* Fallback for projects without specific images if needed, but for now using what we have or placeholder */}
                            <img src={project.image || "https://placehold.co/600x400/121212/BC13FE?text=Project"} alt={project.title} />
                            <div className="card-overlay">
                                {project.link !== "#" && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-btn">
                                        Visitar Site
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="card-tech">
                                {project.tech.map(t => <span key={t}>{t}</span>)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
