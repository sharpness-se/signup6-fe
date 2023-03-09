import { Group } from "./group";

export interface SignUpEvent {
  /** Format: int64 */
  id: number;
  group: Group;
  name: string;
  description: string | null;
  /** Format: date-time */
  startTime: string;
  /** Format: date-time */
  endTime: string;
  /** Format: date */
  lastSignUpDate: string;
  venue: string | null;
  allowExtraFriends: boolean;
  /** @enum {string} */
  eventStatus: 'Created' | 'Cancelled';
  /** Format: int32 */
  maxParticipants: number | null;
  cancellationReason: string | null;
}
