function About() {
  const role = "Jr. Software Enginner";
  const work = "PT MIDI Utama Indonesia Tbk";

  return (
    <section id="about">
      <h1 className="section-title">About Me</h1>
      <h2>{`I'm a ${role} at ${work}.`}</h2>
      {/* https://alfamidiku.com/menu-korporasi */}
      <p>(2 Month of Experience)</p>
      <ul>
        <li>
          <p>Expertice: Back-Office Development.</p>
        </li>
        <li>
          <p>Programming: PHP & Javascript.</p>
        </li>
        <li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            sequi molestias omnis repellendus corporis cupiditate corrupti vel
            iusto ex aliquid autem nulla debitis, minima nobis odit praesentium
            quisquam veniam expedita.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default About;
