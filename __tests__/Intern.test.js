const Intern = require('../lib/Intern');

test('tests if the getRole function has changed to the expected value', () => {
    const int = new Intern('mike', 1, 'email', 'harvard');

    expect(int.getRole()).toBe('Intern');
});

test('tests to check if the getSchool function returns a school', () => {
    const int = new Intern('mike', 1,  'email', 'harvard');

    expect(int.getSchool()).toBe('harvard');
});