import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

function Footer() {
    return (
        <footer className='footer'>
            <section className='footer-main'>
            <article className='footer-main-article'>
                    <div className='footer-main-article-buttons'>
                    <a href="https://www.linkedin.com/in/pablo-arce-paiva-690139253/" > <FaLinkedin className='footer-main-article-buttons-fa' /> </a> 
                    <a href="https://github.com/Pabloblockchain24" > <FaGithubSquare className='footer-main-article-buttons-fa' /> </a>
                    <a href="https://wa.me/56950727028?text=Hola%20amigo,%20quiero%20enviarte%20un%20mensaje"> <FaSquareWhatsapp className='footer-main-article-buttons-fa' /> </a>
                    <a href="mailto:parcepaiva@gmail.com?subject=Contacto portafolio&body=Cuerpo del Correo"><MdMarkEmailUnread className='footer-main-article-buttons-fa'/></a>
                    </div>
                </article>
                <article className='footer-main-article-copyright'>© 2023 DESARROLLADO POR PABLO ARCE</article>
            </section>
        </footer>
    )
}

export default Footer