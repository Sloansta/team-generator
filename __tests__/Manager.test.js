const Manager = require('../lib/Manager');

test('tests the creation of new manager object', () => {
    const manager = new Manager('mike', 1, 'email', 34);

    expect(manager.name).toBe('mike');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('email');
    expect(manager.office).toBe(34);
});

test('tests to see if getRole returns manager', () => {
    const manager = new Manager('mike', 1, 'email', 34);

    expect(manager.getRole()).toBe('Manager');
});

test('tests to see if getOfficeNum returns the correct office number', () => {
    const manager = new Manager('mike', 1, 'email', 34);
    expect(manager.getOfficeNum()).toBe(34);
})