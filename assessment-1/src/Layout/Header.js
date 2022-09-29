import { NavBar } from "./NavBar";
import { Logo } from "../components/SVG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagic, faTh } from "@fortawesome/free-solid-svg-icons";

export const Header = (props) => (
    <header>
        <nav>
            <Logo white />
            <NavBar />
            <div className='mobile_only'>
                <FontAwesomeIcon icon={faBars} style={{ fontSize: "3rem" }} />
            </div>
        </nav>
    </header>
)