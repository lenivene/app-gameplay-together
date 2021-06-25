import React, {
  useCallback,
  useState
} from 'react';
import {
  useFocusEffect,
  useNavigation
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Config
import { localStorageConfig } from "../../config/localStorage";

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
import { ListDivider } from '../../components/ListDivider';
import { Appointment } from '../../components/Appointment';

// Types
import { AppointmentsType } from '../../@types/data';
import { Load } from '../../components/Load';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  // States
  const [categorySelected, setCategory] = useState<number>(null as any);
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentsType>([]);

  const handleCategorySelect = useCallback((categoryId: number) => {
    categoryId === categorySelected ? setCategory(null as any) : setCategory(Number(categoryId));
  }, []);

  const goToAppointmentDetailsScreen = useCallback(() => {
    navigation.navigate('AppointmentDetails');
  }, []);

  const goToAppointmentCreateScreen = useCallback(() => {
    navigation.navigate('AppointmentCreate');
  }, []);

  useFocusEffect(useCallback(() => {
    (async () => {
      const response = await AsyncStorage.getItem(localStorageConfig.collection_appointments);
      const storage: AppointmentsType = response ? JSON.parse(response) : [];

      if(categorySelected){
        setAppointments(storage.filter(item => item.category === categorySelected));
      }else{
        setAppointments(storage)
      }
      
      setLoading(false);
    })();
  }, []))

  return (
    <Container>
      <HeaderContainer>
        <Profile />
        <ButtonAdd onPress={goToAppointmentCreateScreen} />
      </HeaderContainer>
      <CategoriesList
        selected={String(categorySelected)}
        onChange={categoryId => handleCategorySelect(Number(categoryId))}
      />
      {loading ? <Load /> : (
        <>
          <ContentContainer>
            <ListHeader
              title="Partidas agendadas"
              total={6}
            />
          </ContentContainer>
          <AppointmentsList
            data={appointments}
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
        </>
      )}
    </Container>
  );
}