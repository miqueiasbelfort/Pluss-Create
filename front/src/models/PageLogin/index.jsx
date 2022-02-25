import {Container, Button, Img} from './styles' 
import Logo from './assents/Pluss+Class_Logo.svg' // Logo Pluss + Class
import Person from "./assents/person.jpg"
import {FaGoogle, FaGithub} from 'react-icons/fa' // Font Awesome

function Login(){
    return (
        <Container>

            <img className='person' src={Person} alt="Person" />

            <div className='right'>

                <Img src={Logo} alt="Logo Pluss+Class" />

                <h2>Entrar com...</h2>

                <div>
                    <Button 
                        background="#FCA213"
                        backgroundHover="#db8700"
                    > 
                        <FaGoogle/> Google
                    </Button>

                    <Button 
                        background="#000000"
                        backgroundHover="#1d1d1d"
                    > 
                        <FaGithub/> GitHub 
                    </Button>

                </div>
            
            </div>

        </Container>
    )
}
export default Login