import { Container, Form, Wrap, Main, Notes } from "./styles";
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { NoteItem } from "../../components/NoteItem";

import { FiArrowLeft } from 'react-icons/fi'

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";


export function New() {

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }


  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleDeleteMovie(){

  }
  
  async function handleNewNote() {

    if (!title) {
      return alert("Digite o título da nota")
    }

    if (!description) {
      return alert("Digite um nota")
    }

    if (newTag) {
      return alert("Você não confirmou uma tag")
    }


    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    })

    alert("Nota criada com sucesso")
    handleBack()
  }

  return (
    <Container>

      <Header />

      <Main>

        <Form>

          <Link to='/'> <FiArrowLeft size={20} onClick = {handleBack}/> Voltar</Link>

          <h1> Novo Filme </h1>
          <Wrap>
            <Input
              placeholder="Título"
              type="text"
              onChange={e => setTitle(e.target.value)} />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              onChange={e => setRating(e.target.value)} />
          </Wrap>

          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)} />

        </Form>

        <h2>Marcadores</h2>

        <Notes>
          {
            tags.map((tag, index) => (
              <NoteItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))

          }
          <NoteItem
            placeholder="Novo Marcador"
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            onClick={handleAddTag}

            variant="new" />
        </Notes>

        <Wrap>

          <Button
            title="Excluir Filme"

            variant="secondary"
          />

          <Button
            title="Salvar alterações"
            onClick={handleNewNote}
          />

        </Wrap>


      </Main>
    </Container>
  )
}