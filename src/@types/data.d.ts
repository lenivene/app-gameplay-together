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

export type AppointmentsType = Array<IAppointments>