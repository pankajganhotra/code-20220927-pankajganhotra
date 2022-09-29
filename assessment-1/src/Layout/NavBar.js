import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const NavBar = (props) => (
    <div className='desktop_only'>
        <a className='nav_item'>Explore </a>
        <a className='nav_item'>About Us </a>
        <a className='nav_item'>Cities &nbsp;<FontAwesomeIcon icon={faChevronDown} /></a>
        <a className='nav_item cta'>Call </a>
    </div>
)