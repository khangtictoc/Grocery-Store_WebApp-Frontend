

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function removeToken(){
    const date = new Date();
    const DAYS = 1;
    date.setTime(date.getTime() - (DAYS*24*60*60*1000));
    let expires = "expires="+ date.toUTCString();

    // Remove tokens from localStorage and cookies
    document.cookie = "accessToken" + "="  + ";" + expires + ";path=/";
    document.cookie = "refreshToken" + "=" + ";" + expires + ";path=/";
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}

function userLogout(){
    // Set headers
    const myHeaders = new Headers();
    myHeaders.append("Authorization" , "Bearer " + getCookie("accessToken"));

    // Send request
    fetch('http://localhost:9099/user/logout', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    })
    .then(response => {
        if (response.status === 200) {
            removeToken();
            window.location.href = 'success.html';
        } else if (response.status === 403) {
            window.location.href = 'forbidden.html';
            throw new Error('Forbidden');
        } else {
            //window.location.href = 'error.html';
            throw new Error('Something went wrong');
        }
    })
    .catch(error => console.error('Error:', error));
}



document.getElementById("logout-btn").addEventListener('click', userLogout);