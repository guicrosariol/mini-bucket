import type { User, UserProps } from "../entities/user";

export interface UserRepository {
  findById(userId: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: UserProps): Promise<User>;
  update(data: UserProps): Promise<User>;
  delete(id: string): Promise<void>;
}