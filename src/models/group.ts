
export interface Group {
  /** Format: int64 */
  id: number;
  name: string;
  description: string | null;
  mailFrom?: string | null;
  mailSubjectPrefix?: string;
}
