import {MaxContainer, BoxForm, Button} from "./style"
import {RiArrowRightFill} from "react-icons/ri"
import { useState } from "react";

export default function GetInfoUser(){
  const [getOption, setGetOption] = useState()

    return (
      <MaxContainer>
        <BoxForm>
          <h1>Preencha os dados</h1>
          <form className="row g-3" action="" method="post">
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Como você quer ser chamdo:</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="Nickname" />
            </div>
            
            <div class="input-group">
              <select 
                class="form-select"
                onChange={(e) => {
                  setGetOption(e.target.value)
                  console.log(getOption)
                }} 
              >
                <option selected>Selecione uma das opções:</option>
                <option value="professor">Professor</option>
                <option value="aluno">Aluno</option>
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Código da sua sala:</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="Ex: abc123" />
            </div>
            <div>
              <Button>Proximo <RiArrowRightFill/></Button>
            </div>
          </form>
        </BoxForm>
      </MaxContainer>
    );
}