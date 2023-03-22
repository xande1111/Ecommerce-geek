import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import {CardContainer} from "./styles";

export default function CardD() {
  return ( 
   <CardContainer>
   <Card style={{ width: '25rem' }}>
      <Card.Header>nome do produto</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>preço produto</ListGroup.Item>
        <ListGroup.Item>foto_produto.png</ListGroup.Item>
        <ListGroup.Item>tipo do produto</ListGroup.Item>
        <ListGroup.Item>descrição do produto</ListGroup.Item>
        <ListGroup.Item><Button variant="outline-secondary">Salvar</Button>{' '}<Button variant="outline-danger">Excluir definitivamente</Button></ListGroup.Item>
      </ListGroup>
    </Card>
    </CardContainer>
  )
}
