let arr = [];
function show() {
    const newDiv = document.getElementById('new-div');
    newDiv.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        const employee = arr[i];

        const added = document.createElement('div');
        added.setAttribute('class', 'added');

        const ids = document.createElement('span');
        ids.textContent = ` ${employee.id}`;
        added.appendChild(ids);

        const names = document.createElement('span');
        names.textContent = ` Name: ${employee.name}`;
        added.appendChild(names);

        const professions = document.createElement('span');
        professions.textContent = ` Profession: ${employee.profession}`;
        added.appendChild(professions);

        const ages = document.createElement('span');
        ages.textContent = ` Age: ${employee.age}`;
        added.appendChild(ages);

        const deletes = document.createElement('button');
        deletes.setAttribute('class', 'dltBtn');
        deletes.textContent = 'Delete User';
        deletes.setAttribute('onclick', `deleteDiv(${employee.id})`);
        const dltDiv = document.createElement('div');
        dltDiv.setAttribute('class', 'dlt-div');
        dltDiv.appendChild(deletes);
        newDiv.appendChild(added);
        newDiv.appendChild(dltDiv);

    }
}


document.querySelector('form').addEventListener('submit', adding);

function adding(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;

    if (name.trim() === '' || profession.trim() === '' || age.trim() === '') {
        document.getElementById('error').textContent = 'Error: Please make sure all fields are filled before adding an employee!';
        document.getElementById('success').textContent = '';
        return;
    }

    const id = arr.length + 1;
    const employee = { id, name, profession, age };
    arr.push(employee);
    show();
    document.getElementById('success').textContent = 'Success: Employee added!';
    const added = document.getElementById('alreadyAdded');
    added.style.display = 'none';
    document.getElementById('error').textContent = '';
    document.querySelector('form').reset();
}




    function deleteDiv(curr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === curr) {
                arr.splice(i, 1);
                
                document.getElementById('success').textContent = '';
                document.getElementById('error').textContent = 'Employee Removed!';
                break;
            }
        }
        
        if(arr.length===0){
            const added = document.getElementById('alreadyAdded');
            added.style.display = 'block';
            document.getElementById('error').textContent = '';
        }
        show()
    }
  


show();