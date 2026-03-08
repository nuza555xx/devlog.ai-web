export interface LoginFormData {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
}

export interface RegisterResponse {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
}
