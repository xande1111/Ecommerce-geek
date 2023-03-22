import React from 'react';
import Figure from 'react-bootstrap/Figure';
import { FigurePContainer } from "./styles";


export default function FigureP() {
  return ( 
   <FigurePContainer>
    <Figure>
      <Figure.Image
        width={271}
        height={280}
        alt="171x180"
        src="https://img.freepik.com/fotos-premium/ilustracao-de-desenho-animado-estilo-manga-de-retrato-de-mulher-anime_691560-3925.jpg?w=2000"
      />
      <Figure.Caption>
        Descrição da imagem se quiser
      </Figure.Caption>
    </Figure>
    </FigurePContainer>
  )
}
