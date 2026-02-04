import './Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2>Vamos Conversar?</h2>
                    <p>Estou sempre aberto a novas oportunidades e projetos. Entre em contato!</p>
                </div>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/maur%C3%ADcio-cavalcante-b382a3196/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                        <i className="bi bi-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/MauricioCavalcante" target="_blank" rel="noopener noreferrer" className="social-btn github">
                        <i className="bi bi-github"></i> GitHub
                    </a>
                    <a href="https://www.instagram.com/omauricio.dev/?next=%2F" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                        <i className="bi bi-instagram"></i> Instagram
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Maurício Cavalcante. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
