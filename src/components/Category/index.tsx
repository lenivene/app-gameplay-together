import React from 'react';

// Components
import {
  Main,
  Container,
  Wrapper,
  Title,
  Checked,
  Check,
  MainProps,
} from './styles';

type Props = MainProps & {
  icon: any;
  borderColors: string[];
  backgroundColors: string[];
}

export const Category: React.FC<Props> = ({
  borderColors,
  backgroundColors,
  icon: Icon,
  hasCheckbox = false,
  checked = false,
  children,
  ...rest
}) => {
  return (
    <Main
      hasCheckbox={hasCheckbox}
      checked={checked}
      {...rest}
    >
      <Container colors={borderColors}>
        <Wrapper colors={backgroundColors}>
          {hasCheckbox && (
            checked ? <Checked /> : <Check />
          )}
          <Icon 
            width={48} 
            height={48}
          />
          <Title>{children}</Title>
        </Wrapper>
      </Container>
    </Main>
  );
}