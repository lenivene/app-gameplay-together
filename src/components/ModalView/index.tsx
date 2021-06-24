import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback
} from 'react-native';

import { Overlay, Container, Bar } from './styles';

import { BackgroundContainer } from '../Background';

type Props = ModalProps & {
  children: ReactNode;
  onPressClose: () => void;
}

export const ModalView: React.FC<Props> = ({children, onPressClose, ...rest}) => {
  return (
    <Modal
      transparent
      animationType="slide"
      {...rest}
    >
      <TouchableWithoutFeedback onPress={onPressClose}>
        <Overlay>
          <Container>
            <BackgroundContainer>
              <Bar />
              {children}
            </BackgroundContainer>
          </Container>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}