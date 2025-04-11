import { FaGithubSquare } from "react-icons/fa";

function ProjectArticle({ title, description, techs = [], mockup, linkFrontend, linkBackend, url }) {
  return (
    <article className="project-article">
      <div className="project-article-img">
        <img src={mockup} alt="Logo de página web" />
      </div>

      <div className="project-article-text">
        <h2 className="project-article-text-title">{title}</h2>
        <p className="project-article-text-description">{description} </p>

        <div className="project-article-text-techs">
          {techs.map((tech, index) => (
            <img key={index} src={tech} alt={tech} />
          ))}
        </div>

        <div className="project-article-text-codes">
          <p >CODE:</p>
          <div className="project-article-text-codes-container">
            <a href={linkFrontend}>
              <FaGithubSquare />
              <p>FRONTEND</p>
            </a>
            <a href={linkBackend}>
              <FaGithubSquare />
              <p>BACKEND</p>
            </a>
          </div>
        </div>

        <div className="project-article-text-link">
          <a href={url}>
            <p>VISITAR</p>
          </a>
        </div>

      </div>
    </article>
  );
}

export default ProjectArticle;
