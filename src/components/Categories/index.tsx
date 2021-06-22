import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';

// Data mocked
import { categoriesData } from '../../mock/data/categories';

// Components
import { Container } from './styles';
import { Category } from '../Category';

type Props = {
  selected: string;
  onChange: (categoryId: string) => void;
}

export const CategoriesList: React.FC<Props> = ({ selected, onChange }) => {
  const { borderGradient } = useTheme();

  const borderColors = useMemo(() => [...borderGradient], [borderGradient]);
  const backgroundColors = useMemo(() => borderGradient.reverse(), [borderGradient]);

  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 16
      }}
    >
      {
        categoriesData.map(category => (
          <Category
            key={category.id}
            borderColors={borderColors}
            backgroundColors={backgroundColors}
            icon={category.icon}
            checked={selected === null ? selected as boolean : category.id === Number(selected)}
            onPress={() => onChange(String(category.id))}
          >
            {category.title}
          </Category>
        ))
      }
    </Container>
  );
}