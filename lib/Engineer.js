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
                <h4>${this.github}</h4>
                <h4>${this.id}</h4>
                <a href="mailto:${this.email}">Send Email</a>
            </div>
        `;
    }
}


module.exports = Engineer;