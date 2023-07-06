import { Container } from './styles'

export function Tags({ title, isNote = false,...rest }){
  return (
    <Container isNote = {isNote}>
      {title}
    </Container>
  )
}