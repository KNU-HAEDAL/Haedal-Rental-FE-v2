export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userName: string;
  role: string;
}

export interface LoginRequest {
  id: string;
  password: string;
}
