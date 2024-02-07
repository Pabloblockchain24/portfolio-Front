import React from 'react'
import "./Home.css"
import fotoPerfil from "../../assets/fotoPerfilPortafolio.png"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import cvPdf from "../../assets/others/CV-PabloArce.pdf"

function Home() {

    const handleDescargarClick = () => {
        const link = document.createElement('a');
        link.href = cvPdf;
        link.download = 'Cv_Pablo_Arce.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };




    return (
        <main className='home' id="home">
            <section className='home-photo'>
                <img src={fotoPerfil} alt="Foto perfil" className="fotoPerfil" />
            </section>
            <section className='home-text'>
                <div className='home-text-name'>PABLO ARCE</div>
                <div className='home-text-title'>Full-stack Developer JS</div>
                <div className='decorador1'></div>
                <div className='home-text-description'>¡Hola! mi nombre es Pablo Arce soy de Chile, Ingeniero de Transportes de profesión y apasionado por la tecnología, por lo cual, me encuentro buscando desafios como desarrollador. </div>
                <div className='decorador2'>
                    <p className='decAux'> todoestoesundecorador     </p>
                </div>
                <div className='home-text-buttons'>
                    <button onClick={handleDescargarClick} className='home-text-buttons-Cv'> <p>DESCARGAR CV</p> </button>        
                    <a href="https://www.linkedin.com/in/pablo-arce-paiva-690139253/" > <FaLinkedin /> </a>
                    <a href="https://github.com/Pabloblockchain24" > <FaGithubSquare /> </a>
                    <a href="https://wa.me/56950727028?text=Hola%20amigo,%20quiero%20enviarte%20un%20mensaje"> <FaSquareWhatsapp /> </a>
                </div>
            </section>


        </main>
    )
}

export default Home