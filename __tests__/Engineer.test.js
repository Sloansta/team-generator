const Engineer = require('../lib/Engineer');

test('tests creation of new engineer object', () => {
    const eng = new Engineer('mike', 1, 'email', 'sloansta');
    expect(eng.name).toBe('mike');
    expect(eng.id).toBe(1);
    expect(eng.email).toBe('email');
    expect(eng.github).toBe('sloansta');
});

test('tests the getRole function to make sure that it changes from the employee function', () => {
    const eng = new Engineer('mike', 1, 'email', 'sloansta');

    expect(eng.getRole()).toBe('Engineer');
});

test('tests the getGithub function to make sure that it returns a github', () => {
    const eng = new Engineer('mike', 1, 'email', 'sloansta');

    expect(eng.getGithub()).toBe('sloansta');
});