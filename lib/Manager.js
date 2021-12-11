const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    getRole() {
        return 'Manager'
    }

    generateHtml() {
        return `
            <div class='member'>
                <h3>${super.getName()}</h3>
                <h4>${this.getRole()}</h4>
                <h4>Office Number: ${this.office}</h4>
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

module.exports = Manager;