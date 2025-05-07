import type { Bucket, BucketProps } from "../entities/bucket";

export interface BucketRepository {
  create(data: BucketProps): Promise<Bucket>;
  findById(bucketId: string): Promise<Bucket | null>;
  findByOwnerId(ownerId: string): Promise<Bucket[] | null>;
  update(bucketId: string, newData: BucketProps): Promise<Bucket>;
  delete(bucketId: string): Promise<void>;
}