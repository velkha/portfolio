import "./Header.css";
import githubIcon from "assets/github.png";
import linkedinIcon from "assets/linkedin-icon.png";
export default function Header() {
  
  return(
    <header className="header">
      <nav>
        <div className="logo">
          <a href="index.html">D<span>P</span>B</a>
        </div>
        <input type="checkbox" id="menu-toggle"/>
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <ul className="menu">
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
