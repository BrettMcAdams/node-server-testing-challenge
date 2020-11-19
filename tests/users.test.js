const supertest = require("supertest");
const server = require("../server");

describe("users test", () => {
  it("gets a list of users", async () => {
    const res = await supertest(server).get("/users");
  });
  it("gets user by id", async () => {
    const res = await supertest(server).get("/users/1");
    expect(res.body.id).toBe(1);
    expect(res.body.name).toBe("users");
  });
  it("posts a new character", async () => {
    const res = await supertest(server)
      .post("/users")
      .send({ name: "Penguin" });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Penguin");
    expect(res.body.id).toBeDefined();
  });
  it("deletes a character", async () => {
    const res = await supertest(server)
      .del("/users/1")
      .send({ message: "deleted" });
  });
});
