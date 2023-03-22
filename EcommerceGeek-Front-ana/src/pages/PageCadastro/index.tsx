import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormC from "../../components/FormC";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CadastroContainer } from "./styles";
import { FormEvent, useState } from "react";
import { cadastroProduto } from "../../services/MainApi/cadastro";




function CadastroPage() {

  

  const cadastro = async (event: FormEvent) => {
    event.preventDefault();
  }
  return (
    <>
      <Header />
      <CadastroContainer>
        
        <div>
        <br/>
          <Link id="voltar" to="/admin">
            <Button id="botao1" variant="outline-dark">
              Voltar
            </Button>
          </Link>
        </div>
        
        <div className="main">
         
          <h2>Cadastro de Produto</h2>
          <FormC />
        </div>
      </CadastroContainer>
      <Footer />
    </>
  );
}

export default CadastroPage;
