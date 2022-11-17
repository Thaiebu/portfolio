import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/Miracle.jpg';
//import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faEnvelope,faUser} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/portfolio/'>
            <img src={LogoS} alt='s-log'/>
            <p class="name">Mohamed</p>
        </Link>

        <nav>
            <NavLink exact="true" activeclassnam="active" to="/portfolio/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
  

            <NavLink exact="true" activeclassnam="active" className="about-link" to="/portfolio/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassnam="active" className="contact-link" to="/portfolio/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohamed-thaiebu-0015a815a">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    <FontAwesomeIcon icon={faFacebookF} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Thaiebu/">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar