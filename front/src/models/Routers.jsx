import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GetInfoUser from "./getInfoUser"
import Login from "./PageLogin"


export default function Routers(){
    return (
        <Router>
            <Routes>
                <Route path="/get-info-user" element={<GetInfoUser/>}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </Router>
    )
}