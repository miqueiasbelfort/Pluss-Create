import {ContainerHeader, IconsButton, Nav} from "./style"
import Logo from "../../pagesLogin/PageLogin/assents/Pluss+Class_Logo.svg"
import { Link } from "react-router-dom"

function HeaderNavbar({popupAddClass}) {
    return (
        <Nav className="navbar fixed-top navbar-light shadow-sm">
            <ContainerHeader className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="" width="150" height="24" />
                </Link>
                <div>
                    <IconsButton
                        onClick={popupAddClass}
                    >+</IconsButton>
                    <Link to="/">
                        Professor Raul
                    </Link>
                    <Link to="/">
                        <img width="24" height="24" className="rounded" src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprofeflaviobrustoloni.files.wordpress.com%2F2014%2F07%2Fflavio1b.jpg%3Fw%3D488%26h%3D600&f=1&nofb=1" alt="porfil" />
                    </Link>
                </div>
            </ContainerHeader>
        </Nav>
    )
}
export default HeaderNavbar