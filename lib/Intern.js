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
                <h4>School: ${this.school}</h4>
                <h4>ID: ${this.id}</h4>
                <a href="mailto:${this.email}">Send Email</a>
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