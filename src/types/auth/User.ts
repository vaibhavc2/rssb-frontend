export interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}

export type UserLogin = Omit<User, "name" | "username">;
