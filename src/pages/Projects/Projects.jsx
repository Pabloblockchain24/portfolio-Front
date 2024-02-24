import React, { useEffect, useState, useRef } from 'react';
import "./Projects.css"
import reactLogo from "../../assets/hardSkills/reactLogo.jpg"
import mongoLogo from "../../assets/hardSkills/mongoLogo.jpg"
import nodeLogo from "../../assets/hardSkills/nodeLogo.jpg"
import expressLogo from "../../assets/hardSkills/expressLogo.jpg"
import jsLogo from "../../assets/hardSkills/jsLogo.jpg"
import htmlLogo from "../../assets/hardSkills/htmlLogo.jpg"
import cssLogo from "../../assets/hardSkills/cssLogo.jpg"


import { FaGithubSquare } from "react-icons/fa";

function Projects() {
  useEffect(() => {
    const titleCards = document.querySelectorAll('.project-article');
    titleCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 400);
    });
  }, []);


  return (
    <main className='projects' id="projects">
      <h1 className='project-title'> Projects</h1>
      <h2 className='project-subtitle'>"Transformar ideas en código es un arte."</h2>
      <section id="projects-section" >
        <article className='project-article'>
          <div className='project-article-text'>
            <h2 className='project-article-title'>TRANSCURRIN.CL</h2>
            <p className='project-article-description'>Proyecto full-stack con MERN y deploy en Vercel. Cuenta con una aplicacion web comercial y una intranet para clientes.</p>
            <div className='project-article-techs'>
              <img src={mongoLogo} alt="mongo Logo" className="project-article-techs-logo" />
              <img src={expressLogo} alt="express Logo" className="project-article-techs-logo" />
              <img src={reactLogo} alt="react Logo" className="project-article-techs-logo" />
              <img src={nodeLogo} alt="node Logo" className="project-article-techs-logo" />
            </div>
            <div className='project-article-codes'>
            <p className='project-article-codes-p'>CODE:</p>
              <div className='project-article-codes-section'>
                <a href="https://github.com/Pabloblockchain24/transcurrin.cl" className='project-article-codes-link'> <FaGithubSquare /> <p className='project-article-codes-link-p'>FRONTEND</p> </a>
                <a href="https://github.com/Pabloblockchain24/serverTranscurrin" className='project-article-codes-link'> <FaGithubSquare /> <p className='project-article-codes-link-p'>BACKEND</p> </a>
              </div>
            </div>
          </div>
          <div className='project-article-iframe'>
            <iframe src="https://transcurrin-cl-client.vercel.app/" width="300" height="200" frameborder="0"></iframe>
            <a href="https://transcurrin-cl-client.vercel.app/" class="project-article-iframe-enlace">VER DEPLOY</a>

          </div>
        </article>

        <article className='project-article'>
          <div className='project-article-text'>
            <h2 className='project-article-title'>BOBO.CL</h2>
            <p className='project-article-description'>E-commerce full stack desarrollado con MERN. La aplicación permite a usuarios revisar productos, realizar proceso de compra y recibir voucher de la compra</p>
            <div className='project-article-techs'>
              <img src={mongoLogo} alt="mongo Logo" className="project-article-techs-logo" />
              <img src={expressLogo} alt="express Logo" className="project-article-techs-logo" />
              <img src={reactLogo} alt="react Logo" className="project-article-techs-logo" />
              <img src={nodeLogo} alt="node Logo" className="project-article-techs-logo" />
            </div>
            <div className='project-article-codes'>
            <p className='project-article-codes-p'>CODE:</p>
              <div className='project-article-codes-section'>
                <a href="https://github.com/Pabloblockchain24/bobo.cl-front" className='project-article-codes-link'> <FaGithubSquare /> <p className='project-article-codes-link-p'>FRONTEND</p> </a>
                <a href="https://github.com/Pabloblockchain24/bobo.cl-back" className='project-article-codes-link'> <FaGithubSquare /> <p className='project-article-codes-link-p'>BACKEND</p> </a>
              </div>
            </div>
          </div>
          <div className='project-article-iframe'>
            <iframe src="https://bobo-cl-front.vercel.app/" width="300" height="200" frameborder="0"></iframe>
            <a href="https://bobo-cl-front.vercel.app/" class="project-article-iframe-enlace">VER DEPLOY</a>
          </div>
        </article>

        <article className='project-article'>
          <div className='project-article-text'>
            <h2 className='project-article-title'>TODOTASKS.CL</h2>
            <p className='project-article-description'>Proyecto front-end desarrollado con js-vainilla, html y css. La aplicación web permite gestionar las tareas de un usuario.</p>
            <div className='project-article-techs'>
              <img src={jsLogo} alt="js Logo" className="project-article-techs-logo" />
              <img src={htmlLogo} alt="html Logo" className="project-article-techs-logo" />
              <img src={cssLogo} alt="css Logo" className="project-article-techs-logo" />
            </div>
            <div className='project-article-codes'>
              <p className='project-article-codes-p'>CODE:</p>
              <div className='project-article-codes-section'>
                <a href="https://github.com/Pabloblockchain24/transcurrin.cl" className='project-article-codes-link'> <FaGithubSquare /> <p className='project-article-codes-link-p'>FRONTEND</p> </a>
                <a href="https://github.com/Pabloblockchain24/serverTranscurrin" className='project-article-codes-link'> <FaGithubSquare /> <p className='project-article-codes-link-p'>BACKEND</p> </a>
              </div>
            </div>
          </div>
          <div className='project-article-iframe'>
            <iframe src="https://transcurrin-cl-client.vercel.app/" width="300" height="200" frameborder="0"></iframe>
            <a href="https://transcurrin-cl-client.vercel.app/" class="project-article-iframe-enlace">VER DEPLOY</a>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Projects