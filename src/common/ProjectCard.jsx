import PropTypes from "prop-types";

function ProjectCard({ link, name, description }) {
  return (
    <a href={link} target="_blank">
      <h3>{name}</h3>
      <p>{description}</p>
    </a>
  );
}

ProjectCard.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
