import React, {
  useCallback,
  useState
} from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

// Icons
import { Feather } from '@expo/vector-icons';

// Components
import {
  ColumnField,
  Container,
  Field,
  Footer,
  FormContainer,
  Label,
  LengthText,
  SelectBody,
  SelectButtonContainer,
  SelectButtonWrapper,
  SelectImage,
  SeparatorText,
  SmallInput,
  Textarea,
  WrapperMain,
} from './styles';
import { Header } from '../../components/Header';
import { CategoriesList } from '../../components/Categories';
import { Button } from '../../components/Button';
import { WrapperView } from '../../components/WrapperMain';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';
import { IGuild } from '../../@types/data';
import { GuildIcon } from '../../components/GuildIcon';

export const AppointmentCreateScreen: React.FC = () => {
  const themeConfig = useTheme();
  const [category, setCategory] = useState('');
  const [openGuildsModa, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<IGuild>({} as IGuild);

  function handleOpenGuilds(){
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds(){
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: IGuild){
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  const handleCategorySelect = useCallback((categoryId: string) => {
    setCategory(categoryId);
  }, []);

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <WrapperMain>
        <Header
          title="Agendar partida"
        />
        <Label
          style={{
            marginTop: 36,
            marginBottom: 18,
            marginLeft: 24,
          }}
        >
          Categoria
        </Label>
        <CategoriesList
          hasCheckbox
          selected={category}
          onChange={handleCategorySelect}
        />

        <FormContainer>
          <SelectButtonContainer onPress={handleOpenGuilds}>
            <SelectButtonWrapper>
            {
              guild.icon 
              ? <GuildIcon /> 
              : <SelectImage />
            }

              <SelectBody>
                <Label>
                  {guild.name ? guild.name : 'Selecione um servidor'}
                </Label>
              </SelectBody>

              <Feather 
                name="chevron-right"
                color={themeConfig.textColors.heading}
                size={18}
              />
            </SelectButtonWrapper>
          </SelectButtonContainer>
          <Field>
          <WrapperView>
              <Label style={{ marginBottom: 12 }}>
                Dia e mês
              </Label>
              <ColumnField>
                <SmallInput maxLength={2} />
                <SeparatorText>
                  /
                </SeparatorText>
                <SmallInput maxLength={2} />
              </ColumnField>
            </WrapperView>
            <WrapperView>
              <Label style={{ marginBottom: 12 }}>
                Hora e minuto
              </Label>
              <ColumnField>
                <SmallInput maxLength={2} />
                <SeparatorText>
                  :
                </SeparatorText>
                <SmallInput maxLength={2} />
              </ColumnField>
            </WrapperView>
          </Field>
          <Field style={{ marginBottom: 12 }}>
            <Label>
              Descrição
            </Label>

            <LengthText>
              Max 100 caracteres
            </LengthText>
          </Field>

          <WrapperView>
            <Textarea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              style={{textAlignVertical: 'top'}}
            />
          </WrapperView>

          <Footer>
            <Button>Agendar</Button>
          </Footer>
        </FormContainer>
      </WrapperMain>

      <ModalView
        onPressClose={handleCloseGuilds}
        visible={openGuildsModa}
      >
        <Guilds handleGuildSelect={handleGuildSelect}/>
      </ModalView>
    </Container>
  );
}