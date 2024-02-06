import React, { useEffect } from 'react';
import "./Skills.css"
import htmlLogo from "../../assets/hardSkills/htmlLogo.jpg";
import cssLogo from "../../assets/hardSkills/cssLogo.jpg";
import jsLogo from "../../assets/hardSkills/jsLogo.jpg";
import nodeLogo from "../../assets/hardSkills/nodeLogo.jpg";
import reactLogo from "../../assets/hardSkills/reactLogo.jpg";
import npmLogo from "../../assets/hardSkills/npmLogo.jpg";
import gitLogo from "../../assets/hardSkills/gitLogo.jpg";
import mongoLogo from "../../assets/hardSkills/mongoLogo.jpg";
import expressLogo from "../../assets/hardSkills/expressLogo.jpg";
import trabajoEquipo from "../../assets/softSkills/trabajoEnEquipo.png"
import resolucionProblemas from "../../assets/softSkills/problema.png"
import negociacion from "../../assets/softSkills/negociacion.png"
import planificacion from "../../assets/softSkills/planificacion.png"

function Skills() {

  useEffect(() => {
    const logos = document.querySelectorAll('.skills-hard-logo');
    logos.forEach((logo, index) => {
        setTimeout(() => {
            logo.classList.add('visible');
        }, index * 300);
    });
}, []);

useEffect(() => {
  const titleCards = document.querySelectorAll('.skills-soft-card');
  titleCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, index * 300);
  });
}, []);


  return (
    <main className='skills' id="skills">
      <h1 className='skills-title'> Skills</h1>

      <section className='skills-hard'>
          <img src={htmlLogo} alt="HTML Logo" className="skills-hard-logo" />
          <img src={cssLogo} alt="CSS Logo" className="skills-hard-logo" />
          <img src={jsLogo} alt="JavaScript Logo" className="skills-hard-logo" />
          <img src={mongoLogo} alt="MongoDB Logo" className="skills-hard-logo" />
          <img src={expressLogo} alt="Express Logo" className="skills-hard-logo" />
          <img src={reactLogo} alt="React Logo" className="skills-hard-logo" />
          <img src={nodeLogo} alt="Node.js Logo" className="skills-hard-logo" />
          <img src={npmLogo} alt="NPM Logo" className="skills-hard-logo" />
          <img src={gitLogo} alt="Git Logo" className="skills-hard-logo" />
      </section>

      <section className='skills-soft'>
        <article className='skills-soft-card item1'>
          <img src={trabajoEquipo} alt="Trabajo en equipo" className='skills-soft-card-img' />
          <h2 className='skills-soft-card-title'> LIDERAZGO Y TRABAJO EN EQUIPO</h2>
          <p className='skills-soft-card-paragraph'> 3 años de experiencia liderando equipo de trabajo de +20 personas</p>
        </article>

        <article className='skills-soft-card item2'>
          <img src={resolucionProblemas} alt="Resolucion problemas" className='skills-soft-card-img' />
          <h2 className='skills-soft-card-title'> RESOLUCION DE PROBLEMAS</h2>
          <p className='skills-soft-card-paragraph'> 4 años de experiencia solucionando los más diversos ploblematicos logisticos</p>
        </article>

        <article className='skills-soft-card item4'>
          <img src={negociacion} alt="Negociación" className='skills-soft-card-img' />
          <h2 className='skills-soft-card-title'> NEGOCIACIÓN </h2>
          <p className='skills-soft-card-paragraph'> 4 años de experiencia negociando operaciones, servicios y tarifas con clientes y proveedores</p>
        </article>

        <article className='skills-soft-card item3'>
          <img src={planificacion} alt="Planificación" className='skills-soft-card-img' />
          <h2 className='skills-soft-card-title'> ORGANIZACION Y PLANIFICACION </h2>
          <p className='skills-soft-card-paragraph'> 10 años aplicando planificacion estrategica, con objetivos a corto, mediano y largo plazo, personal y laboralmente</p>
        </article>

        {/* <article className='skills-soft-card'>
          <img src={responsabilidad} alt="Responsabilidad" className='skills-soft-card-img' />
          <h2 className='skills-soft-card-title'> RESPONSABILIDAD </h2>
          <p className='skills-soft-card-paragraph'>  El compromiso, la puntualidad y la responsabilidad son habilidades que me representan como trabajador, colega y persona </p>
        </article> */}


      </section>



      <section className='skills-titulos'>

      </section>
    </main>
  )
}

export default Skills