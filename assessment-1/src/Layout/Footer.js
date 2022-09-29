import { NavBar } from "./NavBar";
import { Logo } from "../components/SVG";

export const Footer = (props) => (
    <footer>
        <nav>
            <div>
                <Logo />
                <summary>&#169; 2021 Company Name <br />All rights reserved</summary>
            </div>
            <NavBar />
        </nav>
    </footer>
)