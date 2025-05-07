import { User, type UserProps } from "../../domain/user/entities/user";
import { UserRepository } from "../../domain/user/repositories/user-repository";

export class InMemoryUserRepository implements UserRepository {
  public items: User[] = [];

  findById(userId: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  async create(data: UserProps): Promise<User> {
    const user = User.create(data);
    this.items.push(user);
    return user;
  }
  update(data: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
} 