function updateUser(){
    const id = document.getElementById("updateId").value;
    const username = document.getElementById("updateUsername").value;
    const password = document.getElementById("updatePassword").value;
    const email = document.getElementById("updateEmail").value;
    const phoneNumber = document.getElementById("updatePhoneNumber").value;
    const roleId = document.getElementById("updateRoleId").value;
    const fullname = document.getElementById("updateFullName").value;
    const avatar = document.getElementById("updateAvatar").value;
    const isActivated = document.getElementById("updateIsActivated").value;

    fetch(`http://localhost:9099/user/updatebyid?id=${id}&username=${username}&rawPassword=${password}&email=${email}&phoneNumber=${phoneNumber}&idRole=${roleId}&fullName=${fullname}&avatar=${avatar}&isActivated=${isActivated}`, {
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

document.getElementById("btn-update").addEventListener('click', updateUser);