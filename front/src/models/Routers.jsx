import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GetInfoUser from "./getInfoUser"
import Login from "./PageLogin"
import TeacheDeskboard from "./TeacheDeskboard"


export default function Routers(){
    return (
        <Router>
            <Routes>
                <Route path="/get-info-user" element={<GetInfoUser/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/daskboard-teacher" element={<TeacheDeskboard />}/>
            </Routes>
        </Router>
    )
}