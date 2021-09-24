import "../App.css";
import {Helmet} from "react-helmet";

const Header = () => {
  return (
    <header>
                        <Helmet>
                        <title>Header and hyperlinks</title>
      <meta name="description" content="utf-8"></meta>
      </Helmet>
      <div class="realHeader">
        <h4>
          &nbsp;&nbsp;<a href="#about">
<span>01.&nbsp;</span>About me &nbsp;&nbsp;</a>
<a href="#experience"><span>02.&nbsp;</span>Experience &nbsp;&nbsp;</a>
<a href="#certifications"><span>03.&nbsp;</span>Certifications &nbsp;&nbsp;</a><a href="#education"><span>04.&nbsp;</span>
          Education &nbsp;&nbsp;</a><a href="#projects"><span>05.&nbsp;</span>Projects &nbsp;&nbsp;</a>
          <a href="#contact"><span>06.&nbsp;</span>Contact </a>&nbsp; <a href="Hans-CV.pdf" style={{border: "0.1em solid", gap: "3em", color: "var(--highlightText  )", paddingLeft: "0.5em",paddingRight: "0.5em", borderRadius: "0.5em"}}download="Hans Heje Resume"> Resume↓ </a>

        </h4>
      </div>
    </header>
  );
};

export default Header;
