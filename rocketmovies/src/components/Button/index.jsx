import { Container } from "./styles";

export function Button({icon:Icon, title, loading =false, variant, ...rest}){
  return(
    <Container
    disabled = {loading}  
    variant = {variant} 
    {...rest}
    >

      {loading ? 'Carregando...' :  [Icon && <Icon size={20}/>, title]}

    </Container>
  )

}