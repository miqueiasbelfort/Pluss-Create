import {BoxMaster, MaxContainer, Container, DisplayFlexDiv, Button, GitButton} from './styles'
import LoginImg from '../../imgs/login1.svg'
import Logo from '../../imgs/Pluss+Class_Logo.svg'
import {FaGoogle,FaGithub} from 'react-icons/fa'

function Login(){
    return (
        <BoxMaster>

            <img src={LoginImg} alt="Imagem Login"/>
            
            <MaxContainer>

                <img src={Logo} alt="Logo Pluss+Class" />

                <Container>

                    <h2>Entrar com...</h2>

                    <DisplayFlexDiv>
                        <Button><FaGoogle/>Google</Button>
                        <Button><FaGithub/>GitHub</Button>
                    </DisplayFlexDiv>

                </Container>

            </MaxContainer>
        </BoxMaster>
    )
}
export default Login