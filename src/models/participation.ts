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
  On = 'On',
  Maybe = 'Maybe',
  Off = 'Off',
  Unregistered = 'Unregistered'
}

export interface ParticipationStatuses {
  onCounter: number;
  maybeCounter: number;
  offCounter: number;
  unregisteredCounter: number;
}
