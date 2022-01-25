import "./navBar.css";
import CartWidget from "./cartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGamepad } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	return (
		<header className="header">
			<nav className="navBar">
				<a href="#">
					<FontAwesomeIcon icon={faGamepad} className="navBar-logo" />
				</a>
				<ul className="navBar-links">
					<li>
						<a href="##">Todos</a>
					</li>
					<li>
						<a href="##">Escritorio</a>
					</li>
					<li>
						<a href="##">Consola</a>
					</li>
				</ul>
				<CartWidget />
				<FontAwesomeIcon icon={faBars} className="navBar-menu" />
			</nav>
		</header>
	);
};

export default NavBar;
