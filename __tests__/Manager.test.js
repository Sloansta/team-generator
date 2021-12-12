const Manager = require('../lib/Manager');

test('tests to see if getRole returns manager', () => {
    const manager = new Manager('mike', 1, 'email', 34);

    expect(manager.getRole()).toBe('Manager');
});

test('tests to see if getOfficeNum returns the correct office number', () => {
    const manager = new Manager('mike', 1, 'email', 34);
    expect(manager.getOfficeNum()).toBe(34);
})