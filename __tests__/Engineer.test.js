const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it("can be instantiated", () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
    expect(employee instanceof Engineer).toBe(true);
  });

  it("should have a name property that can be set on instanstiation", () => {
    const engineer = new Engineer("Osvaldo");
    expect(engineer.name).toBe("Osvaldo");
  });

  it("should have a id property that can be set on instanstiation", () => {
    const engineer = new Engineer("Osvaldo", 100);
    expect(engineer.id).toBe(100);
  });

  it("should have an email property that can be set on instanstiation", () => {
    const engineer = new Engineer("Osvaldo", 1, "osvaldo@testemail.com");
    expect(engineer.email).toBe("osvaldo@testemail.com");
  });

  it("should have a github property that can be set on instantiation", () => {
    const engineer = new Engineer(
      "Osvaldo",
      100,
      "osvaldo@testemail.com",
      "osvaldogithub"
    );
    expect(engineer.github).toBe("osvaldogithub");
  });

  it("should return an employee name via getName()", () => {
    const test = "Osvaldo";
    const engineer = new Engineer(test);
    expect(engineer.getName()).toBe(test);
  });

  it("should return an employee id via getId()", () => {
    const test = 100;
    const engineer = new Engineer("Osvaldo", test);
    expect(engineer.getId()).toBe(test);
  });

  it("should return an employee email via getEmail()", () => {
    const test = "osvaldo@testemail.com";
    const engineer = new Engineer("Osvaldo", 100, test);
    expect(engineer.getEmail()).toBe(test);
  });

  it("should return an return an employee github via getGithub()", () => {
    const test = "osvaldogithub";
    const engineer = new Engineer(
      "Osvaldo",
      100,
      "osvaldo@testemail.com",
      test
    );
    expect(engineer.getGithub()).toBe(test);
  });

  it("should return an employee via getRole()", () => {
    const test = "Engineer";
    const engineer = new Engineer(test);
    expect(engineer.getRole()).toBe(test);
  });
});
