let inq = require('inquirer');

inq.
    prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is your team managers name? | '
        },

        {
            type: 'input',
            name: 'managerId',
            message: 'What is your managers employee ID? | '
        },

        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your managers email address? | '
        },

        {
            type: 'input',
            name: 'managerOfficeNum',
            message: 'Lastly, what is your managers office number? | '
        }
    ])
    .then(data => {
        confirmAddEmployee(addEmployee);
        //console.log(data);
    }).catch(err => {
        if(err)
            console.error(err);
    });

function confirmAddEmployee(func) {
    inq.prompt([
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another employee? |'
        }
    ]).then(answer => {
        if(answer.addEmployee)
            func();
        else 
            return false;
    });
}

function addEmployee() {
    inq.prompt([
        {
            type: 'checkbox',
            name: 'typeOfEmployee',
            message: 'What type of employee would you like to add? |',
            choices: ['Engineer', 'Intern']
        }
    ]).then(data => {
        if(data.typeOfEmployee[0] === 'Engineer')
            addEngineer();
        else if(data.typeOfEmployee[0] === 'Intern')
            addIntern();
    })
}

function addEngineer() {
    inq.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the employees name? |'
        },

        {
            type: 'input',
            name: 'engineerId',
            message: 'What is this employees ID? |'
        },

        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers Email? |'
        },

        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineers Github? |'
        }
    ]).then(data => {
        confirmAddEmployee(addEmployee);
    })
}

function addIntern() {
    inq.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the employees name? |'
        },

        {
            type: 'input',
            name: 'internId',
            message: 'What is this employees ID? |'
        },

        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns Email? |'
        },

        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the interns school? |'
        }
    ]).then(data => {
        confirmAddEmployee(addEmployee);
    })
}