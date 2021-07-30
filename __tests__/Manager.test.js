const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it("can be instantiated", () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
    expect(manager instanceof Manager).toBe(true);
  });

  it("should have a name property that can be set on instanstiation", () => {
    const manager = new Manager("Osvaldo");
    expect(manager.name).toBe("Osvaldo");
  });

  it("should have a id property that can be set on instanstiation", () => {
    const manager = new Manager("Osvaldo", 100);
    expect(manager.id).toBe(100);
  });

  it("should have an email property that can be set on instanstiation", () => {
    const manager = new Manager("Osvaldo", 100, "osvaldo@testemail.com");
    expect(manager.email).toBe("osvaldo@testemail.com");
  });

  it("should have an office number property that can be set on instanstiation", () => {
    const manager = new Manager(
      "Osvaldo",
      100,
      "osvaldo@testemail.com",
      1
    );
    expect(manager.officeNumber).toBe(1);
  });

  it("should return an employee name via getName()", () => {
    const test = "Osvaldo";
    const manager = new Manager(test);
    expect(manager.getName()).toBe(test);
  });

  it("should return an employee id via getId()", () => {
    const test = 100;
    const manager = new Manager("Osvaldo", test);
    expect(manager.getId()).toBe(test);
  });

  it("should return an employee email via getEmail()", () => {
    const test = "osvaldo@testemail.com";
    const manager = new Manager("Osvaldo", 100, test);
    expect(manager.getEmail()).toBe(test);
  });


  it("should return an employee via getRole()", () => {
    const test = "Intern";
    const manager = new Manager(test);
    expect(manager.getRole()).toBe(test);
  });
});
