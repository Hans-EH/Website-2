import "../App.css";

const Header = () => {
  return (
    <header>
      <title>Header and hyperlinks</title>
      <div class="realHeader">
        <h4>
          &nbsp;&nbsp;<a href="#about">
            <span>01.&nbsp;</span>About me &nbsp;&nbsp;</a>
          <a href="#experience"><span>02.&nbsp;</span>Experience &nbsp;&nbsp;</a>
          <a href="#education"><span>03.&nbsp;</span>Education &nbsp;&nbsp;</a>
          <a href="#publications"><span>04.&nbsp;</span>Publications &nbsp;&nbsp;</a>
            <a href="#projects"><span>05.&nbsp;</span>Projects &nbsp;&nbsp;</a>
            <a href="#certifications"><span>06.&nbsp;</span>Certificates &nbsp;&nbsp;</a>
          <a href="#contact"><span>07.&nbsp;</span>Contact </a>&nbsp;
           <a href="Hans-cv.pdf" style={{ border: "0.1em solid", gap: "3em", color: "var(--highlightText  )", paddingLeft: "0.5em", paddingRight: "0.5em", borderRadius: "0.5em" }} download="Hans Heje Resume"> Resume↓ </a>

        </h4>
      </div>
    </header>
  );
};

export default Header;
