import { Container, Form, Avatar } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { useState } from "react";
import { useAuth } from '../../hooks/auth'

import { api } from "../../services/api";



export function Profile() {

  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [password, setPassword] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder 
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {

    const updated = {
      name,
      email,
      password,
      old_password: oldPassword,
    }
    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file) 
    setAvatar(imagePreview)
  }

  return (
    <Container>

      <header>
        <Link to='/'> <FiArrowLeft size={20} /> Voltar</Link>
      </header>

      <Form>

        <Avatar>

          <img
            src={avatar}
            alt="Imagem do úsuario" />

          <label htmlFor="avatar">
            <FiCamera size={20} />

            <input
              type="file"
              id="avatar"
              onChange={handleChangeAvatar} />

          </label>

        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          value={name}
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />

      </Form>

    </Container>
  )
}