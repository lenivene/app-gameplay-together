import React from 'react';


// Data
import { guildsData } from '../../mock/data/guilds';

// Components
import { ListDivider } from '../../components/ListDivider';
import { Container, GuildsList } from './styles';
import { Guild } from '../../components/Guild';

// Types
import { IGuild } from '../../@types/data';
type Props = {
  handleGuildSelect: (guild: IGuild) => void;
}

export const Guilds: React.FC<Props> = ({handleGuildSelect}) => {
  return (
    <Container>
      <GuildsList
        data={guildsData}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({ item }) => (
          <Guild
            data={item} 
            onPress={() => handleGuildSelect(item)}
          />
        )}    
      />
    </Container>
  );
}