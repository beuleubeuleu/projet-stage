export type UserType = {
  name: string;
  email: string;
  passwordHash: string;
  phone: string;
  isAdmin: boolean;
  street?: string;
  apartment?: string;
  zip?: string;
  city?: string;
  country?: string;
}