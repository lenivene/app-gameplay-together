export interface IAppointments {
  id: number;
  guild: {
    id: number;
    name: string;
    icon: any;
    owner: boolean;
  };
  category: number;
  date: string,
  description: string
}

export interface IMember {
  id: number;
  username: string;
  avatar_url: string;
  status: 'online' | 'offline';
}

export interface IGuild {
  id: number;
  name: string;
  icon: string | null;
  owner: boolean;
};

export type AppointmentsType = Array<IAppointments>;
export type MembersType = Array<IMember>;
export type GuildsType = Array<IGuild>;