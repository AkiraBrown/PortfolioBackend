import supertest, { Response } from "supertest";
import app from "../server";
import { describe } from "node:test";

describe("GET /", () => {
  it("Should respond with 'Welcome to my portfolio'", async () => {
    const mockResponse: Response = await supertest(app).get("/");
    expect(mockResponse.text).toBe("Welcome to my portfolio");
    expect(mockResponse.status).toBe(200);
  });
});

//Blogs test

describe("GET /blogs", () => {
  it("Should respond with an array", async () => {
    const mockResponse: Response = await supertest(app).get("/blogs");
    expect(Array.isArray(mockResponse["_body"])).toBeTruthy();
    expect(mockResponse.status).toBe(200);
  });
});
// Project test
describe("GET /projects", () => {
  it("Should respond with an array", async () => {
    const mockResponse: Response = await supertest(app).get("/projects");
    expect(Array.isArray(mockResponse["_body"])).toBeTruthy();
    expect(mockResponse.status).toBe(200);
  });
});
