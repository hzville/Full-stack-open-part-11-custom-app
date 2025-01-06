import app from "../../utils/server.js";
import request from "supertest";

describe("test /api/generate-random-number endpoint", () => {
  const apiEndpoint = "/api/generate-random-number";

  test("test body min:2, max:10 ", async () => {
    const res = await request(app).post(apiEndpoint).send({ min: 2, max: 10 });
    expect(res.statusCode).toEqual(200);
    const randomNumber = res.body.randomNumber;
    expect(randomNumber).toBeGreaterThanOrEqual(2);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });

  test("test body min:3, max:20 as string ", async () => {
    const res = await request(app)
      .post(apiEndpoint)
      .send({ min: "3", max: "20" });
    expect(res.statusCode).toEqual(200);
    const randomNumber = res.body.randomNumber;
    expect(randomNumber).toBeGreaterThanOrEqual(3);
    expect(randomNumber).toBeLessThanOrEqual(20);
  });

  test("test with min > max", async () => {
    const res = await request(app).post(apiEndpoint).send({ min: 15, max: 6 });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({
      error: "Invalid paramers: min: 15, max: 6",
    });
  });

  test("test with missing body", async () => {
    const res = await request(app).post(apiEndpoint);
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({
      error: "Invalid paramers: min: null, max: null",
    });
  });

  test("test with empty body", async () => {
    const res = await request(app).post(apiEndpoint).send({ min: "", max: "" });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({
      error: "Invalid paramers: min: null, max: null",
    });
  });

  test("test with whitespace body", async () => {
    const res = await request(app)
      .post(apiEndpoint)
      .send({ min: " ", max: " " });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({
      error: "Invalid paramers: min: null, max: null",
    });
  });

  test("test with missing min", async () => {
    const res = await request(app).post(apiEndpoint).send({ min: "", max: 10 });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({
      error: "Invalid paramers: min: null, max: 10",
    });
  });

  test("test with missing max", async () => {
    const res = await request(app).post(apiEndpoint).send({ min: 3, max: "" });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({
      error: "Invalid paramers: min: 3, max: null",
    });
  });

  test("test with min as string three", async () => {
    const res = await request(app)
      .post(apiEndpoint)
      .send({ min: "three", max: 10 });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({
      error: "Invalid paramers: min: null, max: 10",
    });
  });

  test("test with max as string seven", async () => {
    const res = await request(app)
      .post(apiEndpoint)
      .send({ min: 6, max: "seven" });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({
      error: "Invalid paramers: min: 6, max: null",
    });
  });
});
