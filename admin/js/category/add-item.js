function addCategory(event){
    const name = document.getElementById("inputName").value;

    fetch(`http://localhost:9099/category/add?name=${name}`, {
        method: 'GET'
    })
    .then(response => {
        console.log("server tra ve ", response)
        if (response.status === 200) {
            window.location.href = '../../template/table/category.html';
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

document.getElementById("btn-add").addEventListener('click', addCategory);