import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from 'react-bootstrap/Button';
import Figure from '../../components/FigureP';
import CardD from '../../components/CardD';
import { Link } from 'react-router-dom';
import { DetalhesContainer } from "./styles";


function DetalhesPage() {
    return (
        <>  <Header />
        <DetalhesContainer>
            <div>
            <br/>
            <Link id="voltar" to='/admin'> <Button id="botao1" variant="outline-dark">Voltar</Button></Link>
            </div>
            <div className="main">
                <div className="main1">
                    <h2>Detalhe do Produto</h2>
                    <p></p>
                    <CardD></CardD>

                </div>
                <div className="main2"><Figure></Figure></div>
            </div>
            </DetalhesContainer>
            <Footer />

        </>
    )
}

export default DetalhesPage;