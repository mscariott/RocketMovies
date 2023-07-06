import { Container, Form, Wrap, Main, Notes } from "./styles";
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from "../../components/TextArea"
import {Button} from "../../components/Button" 
import { NoteItem } from "../../components/NoteItem";

import { FiArrowLeft } from 'react-icons/fi'


export function New() {
  return (
    <Container>

      <Header />

      <Main>

      <Form>

        <Link to ='/'> <FiArrowLeft size={20} /> Voltar</Link>

        <h1> Novo Filme </h1>
        <Wrap>
          <Input
            placeholder="Título"
            type="text" />

          <Input
            placeholder="Sua nota (de 0 a 5)"
            type="number" />
        </Wrap>

        <TextArea placeholder= "Observações"/>

      </Form>

      <h2>Marcadores</h2>

      <Notes> 

        <NoteItem placeholder = "Novo Marcador" value = "React"/>
        <NoteItem placeholder = "Novo Marcador" variant= "new"/>



      </Notes>

      <Wrap>

          <Button
            title="Excluir Filme"
            style = {{width: "100%"}}
            variant= "secondary"
            />

          <Button
            title="Salvar alterações"
            style = {{width: "100%"}}          
            />

      </Wrap>


      </Main>






    </Container>
  )
}