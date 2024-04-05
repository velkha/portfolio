import "./Header.css";

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
          <li><a href="#">Home</a></li>
          <li><a href="#">Donde encontrarnos</a></li>
          <li><a href="#">Contactanos</a></li>
        </ul>
      </nav>
    </header>
  )
}
