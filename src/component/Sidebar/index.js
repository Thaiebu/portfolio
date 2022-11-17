import './index.scss';
import { useState } from 'react';
import LogoS from '../../assets/images/Miracle.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return(

    <div className='nav-bar'>
    <Link className='logo' to='/portfolio/' onClick={() => setShowNav(false)}>
        <img src={LogoS} alt='s-log'/>
        <p class="name">Mohamed</p>
    </Link>

    {/* <nav>
        <NavLink exact="true" activeclassnam="active" to="/portfolio/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>


        <NavLink exact="true" activeclassnam="active" className="about-link" to="/portfolio/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>

        <NavLink exact="true" activeclassnam="active" className="contact-link" to="/portfolio/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
    </nav> */}
    <nav className={showNav ? 'mobile-show' : ''}>
    <NavLink 
      exact="true"
      activeclassname="active"
      to="/portfolio/"
      onClick={() => setShowNav(false)}>
      <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
    </NavLink>
    <NavLink 
      activeclassname="active"
      className="about-link"
      to="/portfolio/about"
      onClick={() => setShowNav(false)}>
      <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </NavLink>
    <NavLink
      activeclassname="active"
      className="contact-link"
      to="/portfolio/contact"
      onClick={() => setShowNav(false)}
    >
      <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
    </NavLink>
    <FontAwesomeIcon 
      onClick={() => setShowNav(false)}
      icon={faClose}
      color="#ffd700"
      size="3x"
      className='close-icon' />
  </nav>

    <ul>
        <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohamed-thaiebu-0015a815a">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Thaiebu/">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noopener noreferrer" href="/">
                <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
            </a>
        </li>

    </ul>
    <FontAwesomeIcon 
      onClick={() => setShowNav(true)}
      icon={faBars}
      color="#ffd700"
      size="3x"
      className='hamburger-icon' />

</div>

    )

}

export default Sidebar


