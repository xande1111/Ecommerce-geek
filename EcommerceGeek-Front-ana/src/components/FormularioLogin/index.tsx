// import { useContext } from "react";
// import { LoginContext } from "../../contexts/LoginContexts";
import { Button, Form } from "react-bootstrap";
import { LoginContainer } from "./styles";

export default function FormularioLogin() {
  // const loginInfo = useContext(LoginContext);
  // function click() {
  //   console.log(loginInfo);
  // }
  return (
    <LoginContainer>
    <Form>
      <Form.Group className="mb-5 " controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="" />
        <Form.Text className="text-muted">
          Seu melhor e-mail!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
     
      <Button variant="dark" type="submit">
        Entrar
      </Button>
    </Form>
      
    </LoginContainer>
    
  );
}
