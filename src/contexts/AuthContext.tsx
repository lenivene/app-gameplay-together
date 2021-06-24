import React, {
  createContext,
  useCallback,
  useEffect,
  useState
} from "react";
import * as AuthSession from 'expo-auth-session';

import { configDiscord } from "../config/auth/discordAuth";
import { apiDiscord, getAuthUrlDiscord } from "../services/apiDiscord";

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  }
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(async () => {
    try {
      setLoading(true);

      const authUrl = getAuthUrlDiscord();

      const response = await AuthSession.startAsync({
        authUrl
      }) as AuthorizationResponse;
      const { type, params } = response;

      if (type === "success" && !params.error) {
        apiDiscord.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await apiDiscord.get('/users/@me');

        const [firstName] = userInfo.data.username.split(' ');
        userInfo.data.avatar = `${configDiscord.cdn_image}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token
        }

        setUser(userData);
      }
    } catch {
      throw new Error('Não foi possível autenticar');
    }
    finally{
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn,
    }}>
      {children}
    </AuthContext.Provider>
  )
}