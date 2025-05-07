import { randomUUID } from "crypto";

export interface BucketProps {
  id?: string;
  ownerId: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Bucket {
  public id: string;
  public ownerId: string;
  public name: string;
  public description: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(props: BucketProps) {
    this.id = props.id ?? randomUUID();
    this.ownerId = props.ownerId;
    this.name = props.name;
    this.description = props.description;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static create(props: BucketProps) {
    return new Bucket(props);
  }
}

