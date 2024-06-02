import ProjectCard from "../common/ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <h1 className="section-title">Individual Projects</h1>
      <div className="project-wrapper">
        <ProjectCard
          link="https://github.com/Ade-mir/company-landing-page-2"
          name="Keeper App"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ProjectCard
          link="https://github.com/Ade-mir/company-landing-page-2"
          name="ToDo List v1"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ProjectCard
          link="https://github.com/Ade-mir/company-landing-page-2"
          name="ToDo List v2"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </section>
  );
}

export default Projects;
