import { Container, Form, Avatar } from "./styles";
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>

      <header>
        <Link to='/'> <FiArrowLeft size={20} /> Voltar</Link>
      </header>

      <Form>

        <Avatar>

          <img src="https://github.com/mscariott.png" alt="Imagem do úsuario" />

          <label htmlFor="avatar">
            <FiCamera size={20} />

            <input type="file" id="avatar" />
          </label>

        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" disabled />

      </Form>

    </Container>
  )
}