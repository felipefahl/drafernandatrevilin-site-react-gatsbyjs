import React from 'react';

import { Container, ProcessingList } from './styles';
import processings from '../../data/Processing';

interface ProcessingProps {
  id: string;
}

const Processing: React.FC<ProcessingProps> = ({ id }) => {
  return (
    <Container id={id}>
      <h1>Procedimentos</h1>
      <ProcessingList>
        {processings.map(processing => (
          <li key={processing.id}>
            <h3>{processing.title}</h3>
            <p>{processing.description}</p>
          </li>
        ))}
      </ProcessingList>
    </Container>
  );
};

export default Processing;
