import React, { useMemo } from 'react';
import { useTheme } from 'styled-components/native';

// Data mocked
import { categoriesData } from '../../mock/data/categories';

// Components
import { Container } from './styles';
import { Category } from '../Category';

type Props = {
  selected: string;
  hasCheckbox?: boolean;
  onChange: (categoryId: string) => void;
}

export const CategoriesList: React.FC<Props> = ({
  selected,
  hasCheckbox = false,
  onChange
}) => {
  const { borderGradient } = useTheme();

  const borderColors = useMemo(() => [...borderGradient], [borderGradient]);
  const backgroundColors = useMemo(() => [...borderGradient].reverse(), [borderGradient]);

  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categoriesData.map(category => (
          <Category
            key={category.id}
            borderColors={borderColors}
            backgroundColors={backgroundColors}
            icon={category.icon}
            hasCheckbox={hasCheckbox}
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