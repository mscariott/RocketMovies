import { Container, Profile, Logout } from "./styles"
import { Input } from '../Input'
import { Link } from 'react-router-dom'
import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"


export function Header() {

  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  return (
    <Container>

      <h1>RocketMovies</h1>

      <Input
        placeholder="Pesquisar pelo título"
        type="text" />


      <Profile to='/profile'>

        <div className="text">
          <h2> {user.name}</h2>
          <Logout onClick={signOut}>
            <Link to="/">sair</Link>
          </Logout>
        </div>

        <img src={avatarUrl}
          alt="Imagem de perfil do úsuario" />

      </Profile>

    </Container>
  )
}