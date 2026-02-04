import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">Sobre Mim</h2>
            <div className="about-container">
                <div className="bio-card">
                    <h3>Quem sou eu</h3>
                    <p>
                        Formado em Análise e Desenvolvimento de Sistemas pela Estácio Pós Graduação em Desenvolvimento de Aplicações Web e atualmente cursando 
                        Engenharia de Software. Possuo foco em desenvolvimento web utilizando <strong>Laravel, Django e React</strong>.
                    </p>
                    <p>
                        Trabalhando há 7 anos na <strong>GlobalHitss</strong> prestei serviços à Agência Nacional de Águas (ANA)
                        como técnico em programação e manutenção por 5 anos. Atualmente, atuo como desenvolvedor de software focado em soluções backend e fullstack.
                    </p>
                    <p>
                        Sou movido pelo conhecimento e sempre disposto a aprender novas tecnologias para resolver problemas complexos.
                    </p>
                </div>

                <div className="skills-card">
                    <h3>Habilidades</h3>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h4>Soft Skills</h4>
                            <ul>
                                <li>Proativo</li>
                                <li>Comunicativo</li>
                                <li>Prestativo</li>
                                <li>Foco no Cliente</li>
                                <li>Resolução de Problemas</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h4>Front-end</h4>
                            <ul>
                                <li>React / Vite</li>
                                <li>TailwindCSS</li>
                                <li>Bootstrap</li>
                                <li>JavaScript (ES6+)</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h4>Back-end</h4>
                            <ul>
                                <li>Laravel (PHP)</li>
                                <li>Django (Python)</li>
                                <li>Node.js</li>
                                <li>Google Apps Script</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h4>Outros</h4>
                            <ul>
                                <li>Docker / DevOps</li>
                                <li>n8n / Automação</li>
                                <li>MySQL / PostgreSQL / SQL</li>
                                <li>Git / GitHub</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
