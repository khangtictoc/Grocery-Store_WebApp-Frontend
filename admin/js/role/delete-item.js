async function deleteRole(){
    var deleteBtnLst = document.querySelectorAll('[role-id]');
    deleteBtnLst.forEach(function(element) {
        element.addEventListener('click', async function deleteRole(){
            const id = this.getAttribute("role-id");
            await fetch(`http://localhost:9099/role/deletebyid?id=${id}`, {
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
        });
    });
}