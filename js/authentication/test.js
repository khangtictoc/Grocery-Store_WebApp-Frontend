fetch('http://localhost:9092/user/logout', {
    method: 'POST',
    mode: 'cors',
    headers: {
        "Authorization" : "Bearer " + localStorage.getItem("accessToken")
    }
}).then(response => {}).then(data => { console.log(data); }).catch(error => console.error('Error:', error));