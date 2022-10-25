import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from "./assets/Logo.PNG";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={Logo} alt="Mon Résumeur" />
      </Link>
      <ul>
        <CustomLink to="/petitsdoc">Petits documents</CustomLink>
        <CustomLink to="/grosdoc">Gros documents</CustomLink>
        {/* <CustomLink to="/extraits">Extraits</CustomLink>
        {/* <CustomLink to="/surlignage">Surlignage</CustomLink> */}
        <CustomLink to="/guide">
          <strong>Guide d'utilisation</strong>
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
