import Button from "../../components/ButtonNext"
import {Container, Form, InputBox, Input, BoxForm} from "./style"

function CreateClass(){
    return (
        <Container>
            <h1>Criar nova sala</h1>
            <BoxForm className="containerForm">
                <Form>
                    <InputBox>
                        <label htmlFor="title">Titulo da sala</label>
                        <Input type="text"/>
                    </InputBox>
                    <InputBox>
                        <label htmlFor="materia">Matéria</label>
                        <Input type="text"/>
                    </InputBox>
                    <InputBox>
                        <label htmlFor="description">Descrição</label>
                        <Input type="text" placeholder="max: 50 caracteres"/>
                    </InputBox>
                    <InputBox>
                        <label htmlFor="quanti">Quantidade máxima de alunos</label>
                        <Input type="text"/>
                    </InputBox>
                </Form>
                <Button textBtn="Criar"/>
            </BoxForm>
        </Container>
    )
}
export default CreateClass