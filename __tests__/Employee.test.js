const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("can be instantiated", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
    expect(employee instanceof Employee).toBe(true);
  });

  it("should have a name property that can be set on instanstiation", () => {
    const employee = new Employee("Osvaldo");
    expect(employee.name).toBe("Osvaldo");
  });

  it("should have a id property that can be set on instanstiation", () => {
    const employee = new Employee("Osvaldo", 100);
    expect(employee.id).toBe(100);
  });

  it("should have an email property that can be set on instanstiation", () => {
    const employee = new Employee("Osvaldo", 100, "osvaldo@testemail.com");
    expect(employee.email).toBe("osvaldo@testemail.com");
  });

  it("should return an employee name via getName()", () => {
    const test = "Osvaldo";
    const employee = new Employee(test);
    expect(employee.getName()).toBe(test);
  });

  it("should return an employee id via getId()", () => {
    const test = 100;
    const employee = new Employee("Osvaldo", test);
    expect(employee.getId()).toBe(test);
  });

  it("should return an employee email via getEmail()", () => {
    const test = "osvaldo@testemail.com";
    const employee = new Employee("Osvaldo", 100, test);
    expect(employee.getEmail()).toBe(test);
  });

  it("should return an employee via getRole()", () => {
    const test = "Employee";
    const employee = new Employee(test);
    expect(employee.getRole()).toBe(test);
  });
});
