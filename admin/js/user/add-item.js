function addUser(){
    const username = document.getElementById("inputUsername").value;
    const password = document.getElementById("inputPassword").value;
    const email = document.getElementById("inputEmail").value;
    const phoneNumber = document.getElementById("inputPhoneNumber").value;
    const roleId = document.getElementById("inputRoleId").value;
    const fullname = document.getElementById("inputFullName").value;
    const avatar = document.getElementById("inputAvatar").value;

    fetch(`http://localhost:9099/user/add?username=${username}&rawPassword=${password}&email=${email}&phoneNumber=${phoneNumber}&idRole=${roleId}&fullName=${fullname}&avatar=${avatar}`, {
        method: 'POST'
    })
    .then(response => {
        console.log("server tra ve ", response)
        if (response.status === 200) {
            window.location.href = '../../template/table/user.html';
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

document.getElementById("btn-add").addEventListener('click', addUser);