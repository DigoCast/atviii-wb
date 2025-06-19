import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [headerState, setHeaderState] = useState(false);

  const handleMenu = () => {
    setHeaderState((prev) => !prev);
  };

  return (
    <div className="container-header">
      <Link to={"/"} style={{ color: "inherit" }}>
        <div className="logo">
          <h1>World Beauty</h1>
        </div>
      </Link>

      <nav className="menu">
        <Link to="/produto"  style={{ color: "inherit" }}>
          <li>Produtos</li>
        </Link>
        <Link to="/servico" style={{ color: "inherit" }}>
          <li>Serviços</li>
        </Link>
        <Link to="/cliente" style={{ color: "inherit" }}>
          <li>Clientes</li>
        </Link>
      </nav>

      <div className="hamburger" onClick={handleMenu}>
        ☰
      </div>

      {headerState && (
        <nav className="dropdown-menu">
          <Link to="/produto" onClick={() => setHeaderState(false)} style={{ color: "inherit" }}>
            <li>Produtos</li>
          </Link>
          <Link to="/servico" onClick={() => setHeaderState(false)} style={{ color: "inherit" }}>
            <li>Serviços</li>
          </Link>
          <Link to="/cliente" onClick={() => setHeaderState(false)} style={{ color: "inherit" }}>
            <li>Clientes</li>
          </Link>
        </nav>
      )}
    </div>
  );
};
export default Header;
