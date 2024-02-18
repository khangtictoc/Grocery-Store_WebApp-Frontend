

function submitLogin(event){
    event.preventDefault();

    const date = new Date();
    const EXPIRED_DAYS = 1; 
    
    var formData = new FormData(this);
    date.setTime(date.getTime() + (EXPIRED_DAYS*24*60*60*1000));
    let expires = "expires="+ date.toUTCString();


    fetch('http://localhost:9099/user/signin', {
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
        document.cookie = dataJson.data[0].type + "=" + dataJson.data[0].value + ";" + expires + ";path=/";
        document.cookie = dataJson.data[1].type + "=" + dataJson.data[1].value + ";" + expires + ";path=/";

        localStorage.setItem(dataJson.data[0].type, dataJson.data[0].value);
        localStorage.setItem(dataJson.data[1].type,dataJson.data[1].value);

        window.location.href = 'index.html';
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("login-form").addEventListener('submit', submitLogin);