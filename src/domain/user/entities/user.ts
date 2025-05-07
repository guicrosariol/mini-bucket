import { randomUUID } from "crypto";

export interface UserProps {
  id?: string;
  name: string;
  email: string;
  password_hash: string;
  created_at: Date;
  updated_at: Date;
}

export class User {
  public id: string;
  public name: string;
  public email: string;
  public password_hash: string;
  public created_at: Date;
  public updated_at: Date;

  constructor(props: UserProps) {
    this.id = props.id ?? randomUUID();
    this.name = props.name;
    this.email = props.email;
    this.password_hash = props.password_hash;
    this.created_at = props.created_at;
    this.updated_at = props.updated_at;
  }

  static create(props: UserProps) {
    return new User(props);
  }
}