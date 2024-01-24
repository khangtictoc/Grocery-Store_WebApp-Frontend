function submitLogin(event){
    event.preventDefault();

    var formData = new FormData(this);

    fetch('http://localhost:9092/user/signin', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else if (response.status === 403) {
            window.location.href = 'forbidden.html';
            throw new Error('Forbidden');
        } else {
            window.location.href = 'error.html';
            throw new Error('Something went wrong');
        }
    })
    .then(data => {
        var dataJson = JSON.parse(JSON.stringify(data));
        localStorage.setItem(dataJson.data[0].type, dataJson.data[0].value);
        localStorage.setItem(dataJson.data[1].type,dataJson.data[1].value);
        window.location.href = 'index.html';
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("login-form").addEventListener('submit', submitLogin);