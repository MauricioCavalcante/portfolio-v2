import { useEffect, useState } from 'react';
import './Hero.css';
import ImgCorpo from '../assets/img/corpo.jpeg';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Desenvolvedor Full Stack";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h2 className="greeting">Olá, eu sou</h2>
                    <h1 className="name">Maurício Cavalcante</h1>
                    <h3 className="role">
                        &gt; <span className="typing-text">{text}</span><span className="cursor">|</span>
                    </h3>
                    <p className="description">
                        Analista e desenvolvedor de sistemas. Movido pelo conhecimento e pela criação de soluções tecnológicas de impacto.
                    </p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn btn-primary">Ver Projetos</a>
                        <a href="#contact" className="btn btn-outline">Contato</a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="image-wrapper">
                        {/* Assuming 'corpo.jpeg' was copied to public/images/ */}
                        <img src={ImgCorpo} alt="Maurício Cavalcante" className="profile-img" />
                    </div>
                </div>
            </div>
            <div className="hero-background">
                {/* Decorative elements */}
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>
        </section>
    );
};

export default Hero;
