function addRole(event){
    const name = document.getElementById("inputRoleName").value;
    const description = document.getElementById("inputDescription").value;

    fetch(`http://localhost:9099/role/add?name=${name}&description=${description}`, {
        method: 'POST'
    })
    .then(response => {
        console.log("server tra ve ", response)
        if (response.status === 200) {
            window.location.href = '../../template/table/role.html';
        }
        else if (response.status === 403) {
            window.location.href = '../../404.html';
        }
        else {
            window.location.href = '../../500.html';
        }
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("btn-add").addEventListener('click', addRole);