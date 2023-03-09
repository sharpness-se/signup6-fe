export interface Participation {
  id: number;
  status:	Status;
  numberOfParticipants: number;
  comment: string | null;
  userId:	number;
  eventId:	number;
  signUpTime: string | null;
}

export enum Status {
  On,
  Maybe,
  Off,
  Unregistered
}
