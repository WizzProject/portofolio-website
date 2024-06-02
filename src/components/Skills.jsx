// import checkMarkIconDark from "../assets/icon/checkmark-dark.svg";
// import checkMarkIconLight from "../assets/icon/checkmark-light.svg";
import SkillList from "../common/SkillList";
// import { useTheme } from "../common/ThemeContext";

function Skills() {
  // const { theme } = useTheme();
  // const checkMarkIcon = theme === "light" ? checkMarkIconLight : checkMarkIconDark;
  const checkMarkIcon = "Light";

  return (
    <section id="skills">
      <h1 className="sectionTitle">Skills</h1>
      <div>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
