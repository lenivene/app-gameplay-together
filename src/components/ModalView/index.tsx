import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps
} from 'react-native';

import { Overlay, Container, Bar } from './styles';

import { BackgroundContainer } from '../Background';

type Props = ModalProps & {
  children: ReactNode;
}

export const ModalView: React.FC<Props> = ({children, ...rest}) => {
  return (
    <Modal
      transparent
      animationType="slide"
      {...rest}
    >
      <Overlay>
        <Container>
          <BackgroundContainer>
            <Bar />
            {children}
          </BackgroundContainer>
        </Container>
      </Overlay>
    </Modal>
  );
}