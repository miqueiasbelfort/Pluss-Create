import Logo from "../../PageLogin/assents/Pluss+Class_Logo.svg"
import {FaAngleDown,FaEllipsisV, FaUserCircle, FaPlus} from "react-icons/fa"
import { Heade } from "./style"

export default function Heander(){
    return (
        <Heade>
            <img src={Logo} alt="Pluss + Class"/>

            <div className="infoAndAddClass">
                <button><FaPlus/></button>

                <strong>Professora Anna</strong>

                <div className="boxUserImg">
                    <div className="userPictureHeader"><FaUserCircle/></div>
                    <FaAngleDown/>
                </div>
            </div>
        </Heade>
    )
}