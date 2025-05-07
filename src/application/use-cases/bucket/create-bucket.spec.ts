import { describe, it, expect, beforeEach } from "vitest";
import { makeCreateBucketUseCase, inMemoryUserRepository } from "../../../test/bucket/factories/make-create-bucket";
import type { CreateBucketUseCase } from "./create-bucket";

let sut: CreateBucketUseCase;

describe("CreateBucketUseCase", () => {
  beforeEach(() => {
    sut = makeCreateBucketUseCase;
  })
  it("should create a bucket", async () => {
    await inMemoryUserRepository.create({
      id: "1",
      name: "Guilherme",
      email: "gui@example.com",
      password_hash: "123456",
      created_at: new Date(),
      updated_at: new Date(),
    })
    
    const bucket = await sut.execute({
      name: "Test Bucket",
      ownerId: "1",
      description: "Test Description",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    expect(bucket).toBeDefined();
    expect(bucket.id).toBeDefined();
    expect(bucket.name).toBe("Test Bucket");
    expect(bucket.ownerId).toBe("1");
    expect(bucket.description).toBe("Test Description");
    expect(bucket.createdAt).toBeDefined();
    expect(bucket.updatedAt).toBeDefined();
  });
});