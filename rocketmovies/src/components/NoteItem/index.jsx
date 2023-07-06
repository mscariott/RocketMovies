import {Container} from './styles'

import {FiPlus,FiX} from 'react-icons/fi'

export function NoteItem({value, onClick, variant,  ...rest}){ 
  return(
    <Container
    variant = {variant}
    >
        <input 
        type="text"
        value={value}
        readOnly= { variant !== "new"}
        {...rest}
        />

      <button
      type="button"
      onClick = {onClick}
      >
        {variant === "new" ? <FiPlus size= {25}/> : <FiX size= {25}/>}
      </button>
    </Container>
  )
}