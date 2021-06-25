import React, { useEffect, useState } from 'react';

// Services
import { apiDiscord } from '../../services/apiDiscord';

// Components
import { ListDivider } from '../../components/ListDivider';
import { Container, GuildsList } from './styles';
import { Guild } from '../../components/Guild';

// Types
import { IGuild } from '../../@types/data';
import { Load } from '../../components/Load';

type Props = {
  handleGuildSelect: (guild: IGuild) => void;
}

export const Guilds: React.FC<Props> = ({handleGuildSelect}) => {
  const [guilds, setGuilds] = useState<IGuild[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await apiDiscord.get('/users/@me/guilds');

      setGuilds(response.data);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      {loading ? <Load /> : (
        <GuildsList
          data={guilds}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <ListDivider isCentralized />}
          ListHeaderComponent={() => <ListDivider isCentralized />}
          contentContainerStyle={{
            paddingTop: 103,
            paddingBottom: 68
          }}
          renderItem={({ item }) => (
            <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
            />
          )}
        />
      )}
    </Container>
  );
}