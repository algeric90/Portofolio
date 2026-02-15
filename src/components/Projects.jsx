import { useState, useEffect } from 'react';
import projectsData from '../utils/data.json';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(3);

  useEffect(() => {
    const updateItemsPerRow = () => {
      if (window.innerWidth >= 992) setItemsPerRow(3);
      else if (window.innerWidth >= 768) setItemsPerRow(2);
      else setItemsPerRow(1);
    };

    updateItemsPerRow();
    window.addEventListener('resize', updateItemsPerRow);
    return () => window.removeEventListener('resize', updateItemsPerRow);
  }, []);

  const visibleProjects = showAll
    ? projectsData.projects
    : projectsData.projects.slice(0, itemsPerRow);

  return (
    <section id="projects" className="container py-5">
      <div className="text-center mb-3 mb-lg-5">
        <h2 className="fw-bold">Projects</h2>
        <p className="text-muted">Selected works & case studies</p>
      </div>

      <div className="row g-4">
        {visibleProjects.map((project) => (
          <div key={project.title} className="col-md-6 col-lg-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {projectsData.projects.length > itemsPerRow && (
        <div className="text-center mt-5">
          <button className="btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
}
