import { Button, Card, CardGroup } from "react-bootstrap";
import { CardGroupContainer } from "./styles";

type ListaProdutosProps = {
  imagem: string;
  titulo: string;
  descricao: string;
};

export default function ListaProdutos({
  imagem,
  titulo,
  descricao,
}: ListaProdutosProps) {
  return (
    <CardGroupContainer>
      <CardGroup className="m-2 card-text-center">
        <Card className="text-center">
          <Card.Img
            
            width={150}
            height={330}
            src={imagem}
          />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>{descricao}</Card.Text>
            <Button href="/produtos" variant="secondary">Comprar</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </CardGroupContainer>
  );
}
