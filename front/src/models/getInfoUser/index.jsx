import {MaxContainer, BoxForm, Form} from "./style"
import { useState } from "react"
import {FaArrowDown, FaArrowRight} from "react-icons/fa"
import { Button } from "../PageLogin/styles"
import Logo from "../PageLogin/assents/Pluss+Class_Logo.svg"

export default function GetInfoUser(){

    
    const [valueInputOption, setValueInputOption] = useState()

    return (
        <MaxContainer>
            <BoxForm action="/" method="post">
                <h1>Preencha os Dados</h1>
                
                <img src={Logo} alt="Pluss + Class"/>

                <Form>
                    <label htmlFor="nickname">Como você quer ser chamado?</label>
                    <input 
                        type="text" 
                        placeholder="Nickname" 
                        id="nickname" 
                        name="nickname" 
                        required
                    />

                    <label htmlFor="options">Escolha uma das opções:</label>
                    <input 
                        type="text"
                        placeholder="Selecione uma das opções ↓"
                        list="Lista"
                        id="options"
                        onChange={e => {setValueInputOption(e.target.value)}}
                    />
                    <datalist className="optionInputList" id="Lista">
                        <option value="Aluno">Aluno</option>
                        <option value="Professor">Professor</option>
                    </datalist>
                    
                    {valueInputOption == "Professor" ? ( //Verificação da opção de aluno ou professor
                        <div className="teacherAndStudenty">
                            <label htmlFor="">Olá professor escolha o nome da sua sala:</label>
                            <input 
                                type="text"
                                placeholder="Não pode conter caracteres nem sinais. Ex: Matematica" 
                                id="nameclass"
                                name="nameclass"
                            />
                        </div>
                    ) : (
                        <div className="teacherAndStudenty">
                            <label htmlFor="codClass">Vamos estudar o que hoje?</label>
                            <input 
                                type="text"
                                placeholder="Digite o código da sua sala:"
                                id="codClass"
                                name="codClass" 
                            />
                        </div>
                    )}

                    <Button
                        type="submit"
                        background="#13213B"
                        backgroundHover="#2e4366"
                    >Proximo <FaArrowRight/></Button>

                </Form>

            </BoxForm>
        </MaxContainer>
    )
}