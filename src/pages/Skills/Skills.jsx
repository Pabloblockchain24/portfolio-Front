import { useEffect } from 'react';
import htmlLogo from "../../assets/imgs/hardSkills/htmlLogo.jpg";
import cssLogo from "../../assets/imgs/hardSkills/cssLogo.jpg";
import jsLogo from "../../assets/imgs/hardSkills/jsLogo.jpg";
import nodeLogo from "../../assets/imgs/hardSkills/nodeLogo.jpg";
import reactLogo from "../../assets/imgs/hardSkills/reactLogo.jpg";
import mongoLogo from "../../assets/imgs/hardSkills/mongoLogo.jpg";
import pythonLogo from "../../assets/imgs/hardSkills/pythonLogo.jpg";
import trabajoEquipo from "../../assets/imgs/softSkills/trabajoEnEquipo.png"
import resolucionProblemas from "../../assets/imgs/softSkills/problema.png"
import negociacion from "../../assets/imgs/softSkills/negociacion.png"
import planificacion from "../../assets/imgs/softSkills/planificacion.png"
import djangoLogo from "../../assets/imgs/hardSkills/djangoLogo.jpg"
import mysqlLogo from "../../assets/imgs/hardSkills/mysqlLogo.jpg"
function Skills() {

  useEffect(() => {
    const logos = document.querySelectorAll('.skills-hard img');
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
    <section className='skills' id="skills">
      <h1> Skills</h1>
      
      <section className='skills-hard'>
          <img src={htmlLogo} alt="HTML Logo" />
          <img src={cssLogo} alt="CSS Logo" />
          <img src={jsLogo} alt="JavaScript Logo"  />
          <img src={mongoLogo} alt="MongoDB Logo"  />
          <img src={reactLogo} alt="React Logo" />
          <img src={nodeLogo} alt="Node.js Logo"  />
          <img src={pythonLogo} alt="Python Logo"  />
          <img src={djangoLogo} alt="Django Logo" />
          <img src={mysqlLogo} alt="Mysql Logo"/>

      </section>

      <section className='skills-soft'>
        <article className='skills-soft-card item1'>
          <img src={trabajoEquipo} alt="Trabajo en equipo" className='skills-soft-card-img' />
          <h2> LIDERAZGO Y TRABAJO EN EQUIPO</h2>
          <p > 4 años de experiencia liderando equipo de trabajo de +20 personas</p>
        </article>

        <article className='skills-soft-card item2'>
          <img src={resolucionProblemas} alt="Resolucion problemas" className='skills-soft-card-img' />
          <h2> RESOLUCION DE PROBLEMAS</h2>
          <p > 5 años de experiencia solucionando los más diversos ploblematicos logisticos</p>
        </article>

        <article className='skills-soft-card item4'>
          <img src={negociacion} alt="Negociación" className='skills-soft-card-img' />
          <h2> NEGOCIACIÓN </h2>
          <p > 5 años de experiencia negociando operaciones, servicios y tarifas con clientes y proveedores</p>
        </article>

        <article className='skills-soft-card item3'>
          <img src={planificacion} alt="Planificación" className='skills-soft-card-img' />
          <h2 > ORGANIZACION Y PLANIFICACION </h2>
          <p> 12 años aplicando planificación estratégica, a corto y largo plazo, personal y laboralmente</p>
        </article>
      </section>
      <section className='skills-titulos'>

      </section>
    </section>
  )
}

export default Skills