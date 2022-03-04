import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GetInfoUser from "./pagesLogin/formUser"
import Login from "./pagesLogin/PageLogin"
import Daskboard from "./pagesUser/daskboard"


export default function Routers(){
    return (
        <Router>
            <Routes>
                <Route path="/form-user" element={<GetInfoUser/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/daskboard" element={<Daskboard />}/>
            </Routes>
        </Router>
    )
}