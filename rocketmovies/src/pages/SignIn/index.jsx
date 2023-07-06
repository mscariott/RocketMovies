import { Container, Background, Form } from "./styles";
import { Link } from 'react-router-dom'
import {FiMail, FiLock} from 'react-icons/fi'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function SignIn(){
  return(
    <Container>
      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

      <h2>Faça seu Login</h2>

      <Input 
      placeholder= "E-mail"
      type= "text"
      icon = {FiMail}
      />

      <Input 
      placeholder= "Senha"
      type= "password"
      icon = {FiLock}
      />

      <Button title="Entrar" />

      <Link to= "/register">Criar conta</Link>
      </Form>

      <Background/>

  

    </Container>
  )
}