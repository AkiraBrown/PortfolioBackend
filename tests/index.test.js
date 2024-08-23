const supertest = require("supertest");
const app = require("../app");

//Blogs test

describe("GET /blogs", () => {
  it("Should respond with an array", async () => {
    const mockResponse = await supertest(app).get("/blogs");
    expect(Array.isArray(mockResponse.body)).toBeTruthy();
    expect(mockResponse.status).toBe(200);
  });
});
// describe("GET /:id", () => {
//   it("Should respond with an array", async () => {
//     const mockResponse: Response = await supertest(app).get("/blogs/1");
//     expect(mockResponse.body.id).toBe(1);
//     expect(mockResponse.body.title).toBeTruthy();
//     expect(mockResponse.body.date_uploaded).toBeTruthy();
//     expect(mockResponse.status).toBe(200);
//   });
// });
// Project test
describe("GET /projects", () => {
  it("Should respond with an array", async () => {
    const mockResponse = await supertest(app).get("/projects");
    expect(Array.isArray(mockResponse.body)).toBeTruthy();
    expect(mockResponse.status).toBe(200);
  });
});
// afterAll((done) => {
//   done();
// });
