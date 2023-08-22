export interface LoginInfo {
  email: string;
  password: string;
}
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ErrorMessage {
  name: string;
  message: string;
}
