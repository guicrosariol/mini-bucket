import { Bucket, BucketProps } from "../../../domain/bucket/entities/bucket";
import type { BucketRepository } from "../../../domain/bucket/repositories/bucket-repository";

export class InMemoryBucketRepository implements BucketRepository {
  private items: Bucket[] = [];

  findByOwnerId(ownerId: string): Promise<Bucket[] | null> {
    throw new Error("Method not implemented.");
  }
  update(bucketId: string, newData: BucketProps): Promise<Bucket> {
    throw new Error("Method not implemented.");
  }
  delete(bucketId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async create(data: BucketProps): Promise<Bucket> {
    const bucket = Bucket.create(data);
    this.items.push(bucket);
    return bucket;
  }
  findById(bucketId: string): Promise<Bucket | null> {
    throw new Error("Method not implemented.");
  }

}  
