import ProjectCard from "../common/ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <h1 className="section-title">Individual Projects</h1>
      <div className="project-wrapper">
        <ProjectCard
          link="#"
          name="Math Calculator"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ProjectCard
          link="#"
          name="Keeper App"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ProjectCard
          link="https://marvin-todo-list-app.vercel.app/"
          name="ToDo List"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </section>
  );
}

export default Projects;
