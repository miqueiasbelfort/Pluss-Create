import { Container, CardContainer, InfoClass, ListOfData} from "./style"
import HeaderNavbar from "../../components/HeaderNavbar"

const classdb = [
    {
        id: 1,
        title: "Português",
        description: "Sala de Português 3°B",
        students: 20,
        answered: 10,
        tests: 2
    },
    {
        id: 2,
        title: "Inglês",
        description: "Sala de Inglês 1° I",
        students: 10,
        answered: 3,
        tests: 1
    },
    {
        id: 2,
        title: "Curso JavaScript",
        description: "Curso de JavaScript Rocketseat",
        students: 34,
        answered: 25,
        tests: 3
    }
]

function Daskboard(){

    return (
       
       <>
            <HeaderNavbar/>
            
            <Container>
                <h1>Suas salas professor(a) Anna</h1>
                <CardContainer>
                    {classdb.map(classes => (
                        <div className="card shadow" style={{width: "18rem"}}>
                        <InfoClass className="card-body">
                            <h3>{classes.title}</h3>
                            <p>{classes.description}</p>
                        </InfoClass>
                        <div className="card-body">
                            <ListOfData>
                                <li>Alunos: {classes.students}</li>
                                <li>Testes Aplicados: {classes.tests}</li>
                                <li>Respostas: {classes.answered}</li>
                                <li>Porcentagem: {Math.round(classes.answered * 10 / classes.students * 10)}%</li>
                            </ListOfData>
                        </div>
                    </div>
                    ))}
                </CardContainer>
            </Container>
       </>     
           
    )
}
export default Daskboard