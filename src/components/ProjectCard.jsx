import { FiArrowUpRight } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <div className="card rounded-4 overflow-hidden h-100">
      <div className="card-header p-0">
        <img src={project.imageUrl} alt={project.title} className="img-fluid w-100" />
      </div>

      <div className="card-body p-4 d-flex flex-column">
        <h5 className="card-title fw-semibold">{project.title}</h5>
        <p className="card-text clamp flex-grow-1">{project.description}</p>

        <div className="mb-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="badge me-1 mb-1"
              style={{
                background: 'var(--bg-light)',
                color: 'var(--text-muted)',
                border: '1px solid var(--border-muted)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.projectUrl}
          target="_blank"
          rel="noreferrer"
          className="btn mt-auto rounded-3"
        >
          View Project <FiArrowUpRight className="ms-1" />
        </a>
      </div>
    </div>
  );
}
