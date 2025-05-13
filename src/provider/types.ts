export interface AuthState {
  isLoggetIn: boolean;
  user: User | null;
  token: TokenProps | null;
}

export interface TokenProps {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  document: Document;
  _id: string;
  name: string;
  lastname: string;
  number: string;
  codeNumber: string;
  status: string;
  email: string;
  photo: string;
  source: string;
  userId: string;
  role: Role[];
  account: boolean;
  categoryIds: string[];
  verified: boolean;
  access: string;
  reputation: number;
  location: Location;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Document {
  type: string;
  number: null;
}
export interface Location {
  latitude: number;
  longitude: number;
}

export interface Role {
  type: string;
  label: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
