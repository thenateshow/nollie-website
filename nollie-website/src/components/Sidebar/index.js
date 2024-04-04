import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoN from '../../assets/images/np-logo-no-bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faMusic, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoN} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#FF9966" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#FF9966" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faMusic} color="#FF9966" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="blog-link" to="/blog">
                <FontAwesomeIcon icon={faBlog} color="#FF9966" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#FF9966" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
                    <FontAwesomeIcon icon={faLinkedin} color="#FF9966" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.github.com/">
                    <FontAwesomeIcon icon={faGithub} color="#FF9966" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;