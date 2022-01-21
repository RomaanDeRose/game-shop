import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight, faGamepad } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	return (
		<header className="header">
			<nav className="navBar">
				<a href="#">
					<FontAwesomeIcon icon={faGamepad} className="navBar-logo" />
				</a>
				<ul className="navBar-links">
					<li>
						<a href="##">Inicio</a>
					</li>
					<li>
						<a href="##">Juegos</a>
					</li>
					<li>
						<a href="##">Contacto</a>
					</li>
				</ul>
				<FontAwesomeIcon icon={faAlignRight} className="navBar-menu" />
			</nav>
		</header>
	);
};

export default NavBar;
