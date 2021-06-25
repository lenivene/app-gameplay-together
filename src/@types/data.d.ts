
export interface IGuild {
  id: number;
  name: string;
  icon: string | null;
  owner: boolean;
};

export interface IAppointments {
  id: number;
  guild: IGuild;
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

export type AppointmentsType = Array<IAppointments>;
export type MembersType = Array<IMember>;
export type GuildsType = Array<IGuild>;