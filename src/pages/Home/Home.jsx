import profilePhoto from "../../assets/imgs/profile-photo.jpg"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp, FaArrowDown } from "react-icons/fa6";
import { handleDownloadCv, handleScrollToProjects } from "../../utils/utils";

function Home() {

    return (
        <section className='home-container' id="home">
            <div className='home'>
                <section className='home-photo'>
                    <img src={profilePhoto} alt="Foto perfil" className="home-photo-profile" />
                </section>
                <section className='home-text'>
                    <p className='home-text-name'>PABLO ARCE</p>
                    <p className='home-text-title'>Full-stack Developer JS</p>
                    <p className='home-text-description'>¡Hola! mi nombre es Pablo Arce soy de Chile, Ingeniero de Transportes de profesión y apasionado por la tecnología, por lo cual, me encuentro buscando desafios como desarrollador web. </p>

                    <div className='home-text-buttons'>
                        <button onClick={handleDownloadCv} className='home-text-buttons-Cv'> <p>DESCARGAR CV</p> </button>
                        <a href="https://www.linkedin.com/in/pablo-arce-paiva-690139253/" > <FaLinkedin className='home-text-buttons-cv-icon' /> </a>
                        <a href="https://github.com/Pabloblockchain24" > <FaGithubSquare className='home-text-buttons-cv-icon' /> </a>
                        <a href="https://wa.me/56950727028?text=Hola%20amigo,%20quiero%20enviarte%20un%20mensaje"> <FaSquareWhatsapp className='home-text-buttons-cv-icon' /> </a>
                    </div>
                </section>
            </div>

            <button className='down-button' onClick={handleScrollToProjects}>
                <FaArrowDown className='down-button-icon' />
            </button>
            
        </section>
    )
}

export default Home