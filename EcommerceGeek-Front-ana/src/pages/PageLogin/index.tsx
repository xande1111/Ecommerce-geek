import Header from "../../components/Header";
import FormLogin from "../../components/FormularioLogin";
import Footer from "../../components/Footer";
import { LoginContainer } from "./styles";



export default function PageLogin() {
  return (
    <>
      
        <Header />
        <LoginContainer>
        <FormLogin />
        </LoginContainer>
        <Footer />
      
    </>
  );
}
