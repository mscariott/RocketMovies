import { Container, Content, Menu } from "./styles"
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { FiPlus } from 'react-icons/fi'
import { Notes } from '../../components/Notes'

export function Home() {
  return (
    <Container>
      <Header />

      <Menu >
        <h1>Meus Filmes</h1>
        <Link to = '/new'>
        <Button 
          icon={FiPlus}
          title="Adicionar filme" 
        />
        </Link>
      </Menu>


      <Content>
        <Notes data={
          {
            title: "Interestellar",
            tags: [{ id: 1, name: "Ficção Científica", note: true }, { id: 2, name: "Drama", note: true }, { id: 3, name: "Família", note: true }]
          }
        } />

        <Notes data={
          {
            title: "Interestellar",
            tags: [{ id: 15, name: "Ficção Científica", note: true }, { id: 14, name: "Drama", note: true }, { id: 16, name: "Família", note: true }]
          }
        } />

        <Notes data={
          {
            title: "Interestellar",
            tags: [{ id: 4, name: "Ficção Científica", note: true }, { id: 5, name: "Drama", note: true }, { id: 6, name: "Família", note: true }]
          }
          
        } />

<Notes data={
          {
            title: "Interestellar",
            tags: [{ id: 7, name: "Ficção Científica", note: true }, { id: 8, name: "Drama", note: true }, { id: 9, name: "Família", note: true }]
          }
          
        } />

<Notes data={
          {
            title: "Interestellar",
            tags: [{ id: 10, name: "Ficção Científica", note: true }, { id: 11, name: "Drama", note: true }, { id: 12, name: "Família", note: true }]
          }
          
        } />


      </Content>

    </Container>

  )
}