import type { Bucket, BucketProps } from "../../../domain/bucket/entities/bucket";
import { BucketRepository } from "../../../domain/bucket/repositories/bucket-repository";
import type { UserRepository } from "../../../domain/user/repositories/user-repository";

export class CreateBucketUseCase {
  constructor(
    private readonly bucketRepository: BucketRepository,
    private readonly userRepository: UserRepository
  ) { }

  async execute({
    name,
    ownerId,
    description,
    createdAt,
    updatedAt
  }: BucketProps): Promise<Bucket> {
    const user = await this.userRepository.findById(ownerId);
    if (!user) throw new Error("User not found");

    const createdBucket = await this.bucketRepository.create({
      name,
      ownerId,
      description,
      createdAt,
      updatedAt
    });

    return createdBucket;
  }
}