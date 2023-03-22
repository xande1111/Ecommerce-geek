import { Carousel } from "react-bootstrap";
import ImagemCanecaCoringa from "../../assets/images/canecaCoringa.png";
import ImagemCanecaStar2 from "../../assets/images/canecaStarWars2.png";
import ImagemCanecaStranger from "../../assets/images/canecaStrangerThings.png";
import ImagemFunkoGodOfWar from "../../assets/images/funkoGodOfWar.png";
import ImagemFunkoLara from "../../assets/images/funkoLara.png";
import ImagemFunkoJackSkellington from "../../assets/images/funkoJackSkellington.png";
import ImagemAlmofadaMestres from "../../assets/images/almofadaVideoGame.png";

import {
  BannerContainer,
  ImagemContainerAlmofadas,
  ImagemContainerCaneca,
  ImagemContainerFunko,
  
} from "./style";

export default function Banner() {
  return (
    <BannerContainer>
      <Carousel className="w-100" interval={3000}>
      
        <Carousel.Item>
        <ImagemContainerAlmofadas>
            <img
              width="400px"
              height="450px"
              src={ImagemAlmofadaMestres}
              alt="First slide"
            />
            <img
              width="400px"
              height="450px"
              src={ImagemAlmofadaMestres}
              alt="First slide"
            />
            <img
              width="400px"
              height="450px"
              src={ImagemAlmofadaMestres}
              alt="First slide"
            />
        
          
            <Carousel.Caption>
              <h1 className="">Almofadas</h1>
            </Carousel.Caption>
            </ImagemContainerAlmofadas>

        </Carousel.Item>

        <Carousel.Item>
          <ImagemContainerCaneca>
            <img
              width="400px"
              height="600px"
              src={ImagemCanecaStranger}
              alt="Second slide"
            />
            <img
              width="400px"
              height="600px"
              src={ImagemCanecaCoringa}
              alt="Second slide"
            />
            <img
              width="400px"
              height="600px"
              src={ImagemCanecaStar2}
              alt="Second slide"
            />
          </ImagemContainerCaneca>
          
            <Carousel.Caption>
              <h1>Canecas</h1>
            </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item>
          <ImagemContainerFunko>
            <img
              width="300px"
              height="450px"
              src={ImagemFunkoGodOfWar}
              alt="Third slide"
            />
            <img
              width="350px"
              height="430px"
              src={ImagemFunkoLara}
              alt="Third slide"
            />
            <img
              width="350px"
              height="480px"
              src={ImagemFunkoJackSkellington}
              alt="Third slide"
            />
          </ImagemContainerFunko>
          
            <Carousel.Caption>
              <h1>Funko Pop</h1>
            </Carousel.Caption>
          
        </Carousel.Item>
      </Carousel>
    </BannerContainer>
  );
}
