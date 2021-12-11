class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.position = 'Engineer'
    }

    generateHtml() {
        return `
            <div class='member'>
                <h3>${this.name}</h3>
                <h4>${this.position}</h4>
                <h4>ID: ${this.id}</h4>
                <a href="https://www.github.com/${this.github}">Github</a>
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


module.exports = Engineer;