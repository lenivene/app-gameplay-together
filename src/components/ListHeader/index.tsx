import React from 'react';

import { Container, Title, Subtitle } from './styles';

type Props = {
  title: string;
  total: number;
}
export const ListHeader: React.FC<Props> = ({ title, total }) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Subtitle>
        Total {total}
      </Subtitle>
    </Container>
  );
}