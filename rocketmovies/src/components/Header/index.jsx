import { Container, Profile, Logout } from "./styles"
import {Input} from '../Input'
import {Link} from 'react-router-dom'

export function Header(){
  return(
    <Container>

      <h1>RocketMovies</h1>
      
      <Input 
      placeholder="Pesquisar pelo título"
      type="text"/>


      <Profile to ='/profile'>

        <div className="text">
        <h2> Matheus Scariott</h2>
        <Logout>
        <Link to="/">sair</Link>
        </Logout>
        </div>
      
        <img src="https://github.com/mscariott.png" 
        alt="Imagem de perfil do úsuario" />

      </Profile>
      
    </Container>
  )
}