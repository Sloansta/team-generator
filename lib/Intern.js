class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.position = 'Intern'
    }

    generateHtml() {
        return `
            <div class='member'>
                <h3>${this.name}</h3>
                <h4>${this.position}</h4>
                <h4>${this.school}</h4>
                <h4>${this.id}</h4>
                <a href="mailto:${this.email}">Send Email</a>
            </div>
        `;
    }
}

module.exports = Intern;