const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('mike', 1, 'asd');
    expect(employee.name).toBe('mike');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('asd');
});

test('tests to see if the getName function returns name', () => {
    const employee = new Employee('mike', 1, 'asd');
    expect(employee.getName()).toBe('mike');
});

test('tests to see if getId function returns an id', () => {
    const employee = new Employee('mike', 1, 'asd');
    expect(employee.getId()).toBe(1);
});

test('tests to see if the getEmail function returns and email', () => {
    const employee = new Employee('mike', 1, 'asd');
    expect(employee.getEmail()).toBe('asd');
});

test('tests to see if the getRole function returns the proper role', () => {
    const employee = new Employee('mike', 1, 'asd');
    expect(employee.getRole()).toBe('Employee');
});