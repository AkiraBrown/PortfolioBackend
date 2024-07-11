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
// Project test
