import React from 'react';

import { Container, ProcessingList } from './styles';

interface ProcessingProps {
  id: string;
}

const Processing: React.FC<ProcessingProps> = ({ id }) => {
  return (
    <Container id={id}>
      <h1>Procedimentos</h1>
      <ProcessingList>
        <li>
          <h3>Profilaxia/Limpeza</h3>
          <p>
            Indicado para remover o tártaro, a placa bacteriana e as manchas nos
            dentes, promove saúde para sua boca.
          </p>
        </li>
        <li>
          <h3>Clareamento</h3>
          <p>
            Ideal para recuperar a cor e brilho dos seus dentes de forma
            saudável. Sinta-se bem com um sorriso mais claro.
          </p>
        </li>
        <li>
          <h3>Endodontia (canal)</h3>
          <p>
            Indicado pela dentista quando necessário para remover a dor de dente
            de forma segura e sem dor durante o procedimento.
          </p>
        </li>
        <li>
          <h3>Restaurações</h3>
          <p>
            Indicado para remoção de cárie ou fratura de dente, recuperando a
            forma, função e estética do dente.
          </p>
        </li>
        <li>
          <h3>Bruxismo</h3>
          <p>
            Pode ser causado pelo apertamento ou ranger dos dentes, promovendo
            desgastes dentários ou dores no rosto e de cabeça
          </p>
        </li>
      </ProcessingList>
    </Container>
  );
};

export default Processing;
