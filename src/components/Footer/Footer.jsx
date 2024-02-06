import React from 'react'
import "./Footer.css"

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";


function Footer() {
    return (
        <footer className='footer'>
            <section className='footer-main'>
                <article className='footer-main-section'>© 2023 DESARROLLADO POR PABLO ARCE</article>
                <article className='footer-main-contact'>
                    <h2> Contactame aquí </h2>

                    <div className='footer-contact-buttons'>
                    <a href="https://www.linkedin.com/in/pablo-arce-paiva-690139253/" > <FaLinkedin className='footer-contact-buttons-fa' /> </a>
                    <a href="https://wa.me/56950727028?text=Hola%20amigo,%20quiero%20enviarte%20un%20mensaje"> <FaSquareWhatsapp className='footer-contact-buttons-fa' /> </a>
                    <a href="mailto:parcepaiva@gmail.com?subject=Contacto portafolio&body=Cuerpo del Correo"><MdMarkEmailUnread className='footer-contact-buttons-fa'/></a>

                    </div>

                </article>
            </section>

        </footer>
    )
}

export default Footer