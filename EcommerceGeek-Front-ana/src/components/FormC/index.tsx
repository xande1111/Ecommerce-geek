import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormEvent, useState } from 'react';
import { cadastroProduto } from '../../services/MainApi/cadastro';

export default function FormC() {
  const [nome, setNome] = useState<string>("");
  const [preco, setPreco] = useState<number>(0);
  const [foto, setFoto] = useState<File>();
  const [categoria, setCategoria] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");

  const handlePrecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const precoValue = parseFloat(event.target.value);
    setPreco(precoValue);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      nome,
      preco,
      foto,
      categoria,
      descricao,
    };

    try {
      const response = await cadastroProduto(payload);
      if (response.status !== 201) {
        return alert("Deu algo errado hein..");
      }
      alert("Cadastro efetuado com sucesso!");
    } catch (error) {
      alert("Deu algo errado..");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nomeProduto">
        <Form.Label>Nome do produto</Form.Label>
        <Form.Control type="text" placeholder="Digite aqui" value={nome} onChange={(e) => setNome(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="precoProduto">
        <Form.Label>Preço</Form.Label>
        <Form.Control type="number" placeholder="Digite aqui" value={preco} onChange={handlePrecoChange} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Foto</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={(e) => setFoto((e.target as HTMLInputElement)?.files?.[0])}
        />

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Categoria</Form.Label>
        <Form.Control type="text" placeholder="Digite aqui" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descrição</Form.Label>
        <Form.Control as="textarea" rows={3} value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </Form.Group>
      <Button type="submit" variant="outline-dark">
        Salvar
      </Button>
    </Form>
  );
}
