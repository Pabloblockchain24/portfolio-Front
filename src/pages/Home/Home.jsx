import React from 'react'
import "./Home.css"
import fotoPerfil from "../../assets/fotoPerfilPortafolio.jpg"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp, FaArrowDown } from "react-icons/fa6";

function Home() {
    const handleDescargarClick = () => {
        const link = document.createElement('a');
        link.href = "../../../cv-Pablo_Arce_Paiva.pdf";
        link.download = 'CV-Pablo_Arce_Paiva.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      };


    return (
        <section className='home-container' id="home">
            <div className='home'>
                <section className='home-photo'>
                    <img src={fotoPerfil} alt="Foto perfil" className="fotoPerfil" />
                </section>
                <section className='home-text'>
                    <div className='home-text-name'>PABLO ARCE</div>
                    <div className='home-text-title'>Full-stack Developer JS</div>
                    <div className='decorador1'></div>
                    <div className='home-text-description'>¡Hola! mi nombre es Pablo Arce soy de Chile, Ingeniero de Transportes de profesión y apasionado por la tecnología, por lo cual, me encuentro buscando desafios como desarrollador. </div>

                    <div className='home-text-buttons'>
                        <button onClick={handleDescargarClick} className='home-text-buttons-Cv'> <p>DESCARGAR CV</p> </button>
                        <a href="https://www.linkedin.com/in/pablo-arce-paiva-690139253/" > <FaLinkedin className='home-text-buttons-cv-icon' /> </a>
                        <a href="https://github.com/Pabloblockchain24" > <FaGithubSquare className='home-text-buttons-cv-icon' /> </a>
                        <a href="https://wa.me/56950727028?text=Hola%20amigo,%20quiero%20enviarte%20un%20mensaje"> <FaSquareWhatsapp className='home-text-buttons-cv-icon' /> </a>
                    </div>
                </section>
            </div>
            <button className='buttonAbajo parpadeo' onClick={scrollToProjects}>
                <FaArrowDown className='flechaAbajo' />
            </button>

        </section>
    )
}

export default Home