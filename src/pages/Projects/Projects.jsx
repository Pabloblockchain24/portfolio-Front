import { useEffect, useState  } from "react";
import react from "../../assets/imgs/hardSkills/reactLogo.jpg";
import mongo from "../../assets/imgs/hardSkills/mongoLogo.jpg";
import node from "../../assets/imgs/hardSkills/nodeLogo.jpg";
import express from "../../assets/imgs/hardSkills/expressLogo.jpg";
import js from "../../assets/imgs/hardSkills/jsLogo.jpg";
import html from "../../assets/imgs/hardSkills/htmlLogo.jpg";
import css from "../../assets/imgs/hardSkills/cssLogo.jpg";

import transcurrin from "../../assets/imgs/others/transcurrin.png";
import bobo from "../../assets/imgs/others/bobo.png";
import hospital from "../../assets/imgs/others/hospital.png";

import ProjectArticle from "../../components/Project-article/Project-article";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("src/data/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error al cargar los proyectos:", error);
      });
  }, []);

  const techImages = {
    react: react,
    mongo: mongo,
    node: node,
    express: express,
    js: js,
    html: html,
    css: css,
  };

  const mockups = {
    transcurrin: transcurrin,
    bobo: bobo,
    hospital: hospital,
  };

  return (
    <section className="project" id="projects">
      <h1> Projects</h1>

      {projects.map((project, index) => (
        <ProjectArticle
          key={index}
          title={project.title}
          description={project.description}
          techs={project.techs.map((tech) => techImages[tech])} 
          mockup={mockups[project.mockup]}
          linkFrontend={project.linkFrontend}
          linkBackend={project.linkBackend}
          url={project.url}
        />
      ))}
      </section>
  );
}

export default Projects;
