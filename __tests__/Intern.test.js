const Intern = require("../lib/Intern");

describe("Intern class", () => {
  it("can be instantiated", () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
    expect(intern instanceof Intern).toBe(true);
  });

  it("should have a name property that can be set on instanstiation", () => {
    const intern = new Intern("Osvaldo");
    expect(intern.name).toBe("Osvaldo");
  });

  it("should have a id property that can be set on instanstiation", () => {
    const intern = new Intern("Osvaldo", 100);
    expect(intern.id).toBe(100);
  });

  it("should have an email property that can be set on instanstiation", () => {
    const intern = new Intern("Osvaldo", 100, "osvaldo@testemail.com");
    expect(intern.email).toBe("osvaldo@testemail.com");
  });

  it("should have a school property that can be set on instanstiation", () => {
    const intern = new Intern(
      "Osvaldo",
      100,
      "osvaldo@testemail.com",
      "Rice Univeristy"
    );
    expect(intern.school).toBe("Rice Univeristy");
  });

  it("should return an employee name via getName()", () => {
    const test = "Osvaldo";
    const intern = new Intern(test);
    expect(intern.getName()).toBe(test);
  });

  it("should return an employee id via getId()", () => {
    const test = 100;
    const intern = new Intern("Osvaldo", test);
    expect(intern.getId()).toBe(test);
  });

  it("should return an employee email via getEmail()", () => {
    const test = "osvaldo@testemail.com";
    const intern = new Intern("Osvaldo", 100, test);
    expect(intern.getEmail()).toBe(test);
  });

  it("should return an employee school vis getSchool()", () => {
    const test = "Rice University";
    const intern = new Intern("Osvaldo", 100, "osvaldo@testemail.com", test);
    expect(intern.getSchool()).toBe(test);
  });

  it("should return an employee via getRole()", () => {
    const test = "Intern";
    const intern = new Intern(test);
    expect(intern.getRole()).toBe(test);
  });
});
