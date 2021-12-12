const Intern = require('../lib/Intern');

test('tests creation of new intern object', () => {
    const int = new Intern('mike', 1, 'email', 'harvard');
    expect(int.name).toBe('mike');
    expect(int.id).toBe(1);
    expect(int.email).toBe('email');
    expect(int.school).toBe('harvard');
});

test('tests if the getRole function has changed to the expected value', () => {
    const int = new Intern('mike', 1, 'email', 'harvard');

    expect(int.getRole()).toBe('Intern');
});

test('tests to check if the getSchool function returns a school', () => {
    const int = new Intern('mike', 1,  'email', 'harvard');

    expect(int.getSchool()).toBe('harvard');
});