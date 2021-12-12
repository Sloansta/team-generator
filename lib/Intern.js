const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'Intern'
    }

    getSchool() {
        return this.school;
    }

    generateHtml() {
        return `
            <div class='member'>
                <h3>${super.getName()}</h3>
                <h4>${this.getRole()}</h4>
                <h4>School: ${this.getSchool()}</h4>
                <h4>ID: ${super.getId()}</h4>
                <a href="mailto:${super.getEmail()}">Send Email</a>
            </div>

            <style>
                .member {
                    text-align: center;
                    justify-content: center;
                    border: 15px;
                    border-style: solid;
                }
            </style>
        `;
    }
}

module.exports = Intern;