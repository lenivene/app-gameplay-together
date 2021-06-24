import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// Components
import {
  AppointmentsList,
  Container,
  ContentContainer,
  HeaderContainer,
} from './styles';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { ListHeader } from '../../components/ListHeader';
import { CategoriesList } from '../../components/Categories';
import { appointmentsData } from '../../mock/data/appointments';
import { ListDivider } from '../../components/ListDivider';
import { Appointment } from '../../components/Appointment';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [categorySelected, setCategory] = useState<string>(null as any);

  const handleCategorySelect = useCallback((categoryId: string) => {
    categoryId === categorySelected ? setCategory(null as any) : setCategory(categoryId);
  }, []);

  const goToAppointmentDetailsScreen = useCallback(() => {
    navigation.navigate('AppointmentDetails');
  }, []);

  const goToAppointmentCreateScreen = useCallback(() => {
    navigation.navigate('AppointmentCreate');
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <Profile />
        <ButtonAdd onPress={goToAppointmentCreateScreen} />
      </HeaderContainer>
      <CategoriesList
        selected={categorySelected}
        onChange={handleCategorySelect}
      />
      <ContentContainer>
        <ListHeader
          title="Partidas agendadas"
          total={6}
        />
      </ContentContainer>
      <AppointmentsList
        data={appointmentsData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
        renderItem={({ item }) => (
          <Appointment
            data={item}
            onPress={goToAppointmentDetailsScreen}
          />            
        )}
      />
    </Container>
  );
}