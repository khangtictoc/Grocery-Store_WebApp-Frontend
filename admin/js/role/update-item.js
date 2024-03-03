function updateRole(event){
    const id = document.getElementById("updateRoleId").value;
    const name = document.getElementById("updateRoleName").value;
    const description = document.getElementById("updateDescription").value;

    fetch(`http://localhost:9099/role/updatebyid?id=${id}&name=${name}&description=${description}`, {
        method: 'GET'
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

document.getElementById("btn-update").addEventListener('click', updateRole);