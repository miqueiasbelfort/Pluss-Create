import {Nav, Img, Perfil, Tools, ButtonAddClass} from "./style"
import Logo from "../../pagesLogin/PageLogin/assents/Pluss+Class_Logo.svg"
import {Link} from "react-router-dom"

function HeaderNavbar(){
    return (
        <Nav className="shadow-sm">
            <div className="logo">
                <Img src={Logo} alt="logotipo" />
            </div>
            <Tools>
                <ButtonAddClass>+</ButtonAddClass>
                <Link className="link" to="/"><span>Professor Anna</span></Link>
                <Perfil>
                    <img src="//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpostcron.com%2Fpt%2Fblog%2Fwp-content%2Fuploads%2F2016%2F05%2Ffoto-de-perfil-para-trabalho.jpg&f=1&nofb=1" alt="teacher photo" />
                    <div className="iconPerfilTools"></div>
                </Perfil>
            </Tools>
        </Nav>
    )
}

export default HeaderNavbar