export interface Participation {
  id: number;
  status:	Status;
  numberOfParticipants: number;
  comment: string;
  userId:	number;
  eventId:	number;
  signUpTime: string;
}

export enum Status {
  On,
  Maybe,
  Off,
  Unregistered
}
