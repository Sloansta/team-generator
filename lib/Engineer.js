const { setUncaughtExceptionCaptureCallback } = require('process');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer'
    }

    generateHtml() {
        return `
            <div class='member'>
                <h3>${super.getName()}</h3>
                <h4>${this.getRole()}</h4>
                <h4>ID: ${super.getId()}</h4>
                <a href="https://www.github.com/${this.github}">Github</a>
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


module.exports = Engineer;