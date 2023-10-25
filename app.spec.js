const request = require("supertest");
const app = require("./app");

describe("Test hello giro", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("It should response Hello Giro", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello Giro!");
  });
});