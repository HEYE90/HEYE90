import Navigation from "../Navigation/Navigation"
import LogoImage from "../../assets/image/flower.png"

import "./Header.css"

const Logo = (props) => {
    return <img src={LogoImage} className="logoImage" alt="LogoImage" />
}

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Navigation className="navigationLink" url="/" icon="" text="Flowers World" >
                    <Logo />
                </Navigation>
            </div>
            <nav className="navMenu">
                <Navigation className="navItem"  url="/" icon="DashboardIcon" text="Home" />
                <Navigation className="navItem" url="/about" icon="ReportsIcon" text="About" />
                <Navigation className="navItem" url="/contact" icon="MessageIcon" text="Contact" />
            </nav>
        </header>
    )
}

export default Header 