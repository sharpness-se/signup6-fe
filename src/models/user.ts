
export interface User {
  /** Format: int64 */
  id: number;
  firstName: string;
  lastName: string;
  comment: string | null;
  email?: string;
  phone?: string | null;
  /** @enum {string} */
  permission?: 'Administrator' | 'NormalUser';
  /** @enum {string} */
  imageProvider: 'Gravatar' | 'Cloudinary';
  imageVersion: string;
  providerKey: string | null;
}
