import { Container } from "./styles";
import { FiStar } from 'react-icons/fi'

export function Score({ grade }) {
  return (
    <Container grade={grade}>
      <FiStar />
      <FiStar />
      <FiStar />
      <FiStar />
      <FiStar />
    </Container>
  )



}