import { Container } from './styles'
import { Tags } from '../Tags'
import {Link} from 'react-router-dom'
import {Score} from '../Score'


export function Notes({ data, ...rest }) {
  return (
    <Container>

      <Link to='/preview/01' >{data.title}</Link>

      <Score grade = {4}/>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem voluptatibus, laboriosam necessitatibus praesentium officiis tempora. Repudiandae facilis aliquid hic doloremque sapiente facere? Natus laborum odit ea nam vero aut. Mollitia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt, deserunt voluptates laudantium minus sapiente iure dolore placeat aliquid laborum laboriosam veniam sed libero necessitatibus explicabo, neque veritatis eum praesentium.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate porro nam, officiis, labore maxime, blanditiis quisquam quae iure animi possimus magni optio aliquam. Ab deserunt nam quam exercitationem velit!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi tenetur maxime sed obcaecati, quaerat maiores fugiat facilis laboriosam tempore aliquid incidunt error eligendi laudantium odio atque molestiae aspernatur laborum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quia quisquam vel dolore ipsam nam eveniet eos nisi consequuntur incidunt repellendus reprehenderit accusamus, nesciunt facere a? Voluptatum cumque similique libero?</p>

      {data.tags &&
        <footer>
          {
            data.tags.map( tag => <Tags key ={tag.id} title = {tag.name} isNote = {tag.note}/> )
          }
        </footer>
      }

    </Container>

  )
}