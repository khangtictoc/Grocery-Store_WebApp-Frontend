async function disableUser(){
    var disableBtnLst = document.querySelectorAll('[disable-user-id]');
    disableBtnLst.forEach(function(element) {
        element.addEventListener('click', async function disableUser(){
            const id = this.getAttribute("disable-user-id");
            const username = this.getAttribute("disable-user-username");
            const password = this.getAttribute("disable-user-password");
            const email = this.getAttribute("disable-user-email");
            const phoneNumber = this.getAttribute("disable-user-phoneNumber");
            const roleId = this.getAttribute("disable-user-roleId");
            const fullname = this.getAttribute("disable-user-fullName");
            const avatar = this.getAttribute("disable-user-avatar");
            const isActivated = this.getAttribute("disable-user-isActivated");


            await fetch(`http://localhost:9099/user/updatebyid?id=${id}&username=${username}&rawPassword=${password}&email=${email}&phoneNumber=${phoneNumber}&idRole=${roleId}&fullName=${fullname}&avatar=${avatar}&isActivated=${isActivated}`, {
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
        });
    });
}