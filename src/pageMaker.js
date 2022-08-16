function pageMaker(teamArr) {
    const manager = teamArr[0];
    let counter = 1;
    let html =
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">    <title>Team Homepage</title>
</head>
<body class = "bg-secondary">
    <div class="container-fluid">
        <h1 class="text-light text-center p-2"> The Team </h1>
        <!-- Manager -->
        <div class="card m-4">
            <div class="card-header bg-primary bg-gradient text-light p-1">
                <h4 class="text-center">${manager.getName()}</h4>
                <h5 class="text-center">Manager</h5>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item ms-3">ID: ${manager.getId()}</li>
                    <li class="list-group-item ms-3">Office Number: ${manager.getOfficeNumber()}</li>
                    <li class="list-group-item ms-3">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  </ul>
            </div>
            <div class="row row-cols-3 m-4">`;
    //runs a loop through the remaining team members, if there are any beyond the manager
    while (counter<teamArr.length) {
        const employee = teamArr[counter];
        //either github user or school
        const variedParam = (employee.getRole()==="Intern" ? 
        `<li class="list-group-item ms-3">School: ${employee.getSchool()}</li>` :
        `<li class="list-group-item ms-3">Github Username: <a target="_blank" href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>`)
        //html block for each employee
        html += `
<!-- other employees -->
<div class="card col m-2">
    <div class="card-header bg-primary bg-gradient text-light p-1">
        <h4 class="text-center">${employee.getName()}</h4>
        <h5 class="text-center">${employee.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item ms-3">ID: ${employee.getId()}</li>
        ${variedParam}
        <li class="list-group-item ms-3">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        </ul>
    </div>`

        //increment counter and close while loop
        counter ++;
        }

    //now add the last bits, with the loop done
    html +=`
        </div>
    </div>
</body>
</html>`

    return html
}

module.exports=pageMaker;