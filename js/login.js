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
        localStorage.setItem('userData', JSON.stringify(data));
        window.location.href = 'index.html';
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("login-form").addEventListener('submit', submitLogin);