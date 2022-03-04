import { Container, InfoClass, Card } from "./style"
import HeaderNavbar from "../../components/HeaderNavbar"

function Daskboard(){

    const addClass = () => {
        alert("add a new class")
    }

    return (
        <div>
            <HeaderNavbar style={{
                position: "fixed",
                zIndex: 999
            }} popupAddClass={addClass}/>
            <Container>
                
                <h1>Suas Salas Prof. Raul</h1>
                
                <div className="boxCard">
                    <Card className="card">
                        <InfoClass className="card-body">
                            <h3>English</h3>
                            <p>Sala de Inglês do 3° A</p>
                        </InfoClass>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </Card>

                    <Card className="card">
                        <InfoClass className="card-body">
                            <h3>English</h3>
                            <p>Sala de Inglês do 3° A</p>
                        </InfoClass>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </Card>

                    <Card className="card">
                        <InfoClass className="card-body">
                            <h3>English</h3>
                            <p>Sala de Inglês do 3° A</p>
                        </InfoClass>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </Card>
                </div>
            </Container>
        </div>
    )
}
export default Daskboard