import React, { useCallback, useState } from 'react';

// Components
import {
  AppointmentSeparatorList,
  AppointmentsList,
  Container,
  ContentContainer,
  HeaderContainer,
  HeaderContent,
  HeaderSubTitle,
  HeaderTitle
} from './styles';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategoriesList } from '../../components/Categories';
import { appointmentsData } from '../../mock/data/appointments';
import Appointment from '../../components/Appointment';

export const HomeScreen: React.FC = () => {
  const [categorySelected, setCategory] = useState<string>(null as any);

  const handleCategorySelect = useCallback((categoryId: string) => {
    categoryId === categorySelected ? setCategory(null as any) : setCategory(categoryId);
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <Profile />
        <ButtonAdd />
      </HeaderContainer>
      <CategoriesList
        selected={categorySelected}
        onChange={handleCategorySelect}
      />
      <ContentContainer>
        <HeaderContent>
          <HeaderTitle>
            Partidas agendadas
          </HeaderTitle>
          <HeaderSubTitle>
            Total 6
          </HeaderSubTitle>
        </HeaderContent>
        <AppointmentsList
          showsVerticalScrollIndicator={false}
          data={appointmentsData}
          ItemSeparatorComponent={() => <AppointmentSeparatorList />}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} />            
          )}
        />
      </ContentContainer>
    </Container>
  );
}