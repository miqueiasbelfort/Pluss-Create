import {Button}  from "./style"
import {RiArrowRightFill} from "react-icons/ri"

function ButtonNext({textBtn}){
    return <Button>{textBtn} <RiArrowRightFill/></Button>
}
export default ButtonNext