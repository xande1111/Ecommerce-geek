import { Button } from 'react-bootstrap';
import { ButtonContainer } from "./styles";


export default function ButtonsA() {
    return ( 
    
        <>
        <ButtonContainer>
        <Button variant="outline-dark" size="lg">Produtos</Button>{' '}
        <Button variant="outline-dark" size="lg">Usuários</Button>{' '}
        <Button variant="outline-dark" size="lg">Pedidos</Button>{' '}
        </ButtonContainer>
        </>
    )
}
 
