export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface LoginRequest {
  id: string;
  password: string;
}
