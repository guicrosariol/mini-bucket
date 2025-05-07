import { CreateBucketUseCase } from "../../../application/use-cases/bucket/create-bucket";
import { InMemoryBucketRepository } from "../repository/in-memory-bucket-repository";
import { InMemoryUserRepository } from "../../../test/user/repository/in-memory-user-repository";

export const inMemoryBucketRepository = new InMemoryBucketRepository();
export const inMemoryUserRepository = new InMemoryUserRepository();
export const makeCreateBucketUseCase = new CreateBucketUseCase(inMemoryBucketRepository, inMemoryUserRepository);

