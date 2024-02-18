

function submitSignup(event){
    event.preventDefault();

    var formData = new FormData(this);

    fetch('http://localhost:9099/user/signup', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.status === 200) {
            window.location.href = 'index.html';
            return response.json();
        } 
        else {
            window.location.href = 'error.html';
            throw new Error('Something went wrong');
        }
    })
    .then(data => {
        console.log("Sign up data has been sent!")
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("signup-form").addEventListener('submit', submitSignup);