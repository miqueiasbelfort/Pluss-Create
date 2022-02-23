import {Container, Button, Img} from './styles' 
import Logo from '../../imgs/Pluss+Class_Logo.svg' // Logo Pluss + Class
import {FaGoogle, FaGithub} from 'react-icons/fa' // Font Awesome

function Login(){
    return (
        <Container>

            <div>
                {/*Colocar img pagina do login*/}
            </div>
    
            <div>

                <Img src={Logo} alt="Logo Pluss+Class" />

                <div>

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

            </div>
        </Container>
    )
}
export default Login