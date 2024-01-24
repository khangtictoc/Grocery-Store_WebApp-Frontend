function userLogout(){

    // Remove tokens from localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    // Set headers
    const myHeaders = new Headers();
    myHeaders.append("Authorization" , "Bearer " + localStorage.getItem("accessToken"));
    myHeaders.append("ConCac", "DuongVat");

    // Send request
    fetch('http://localhost:9092/user/logout', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            "cgrfgfg" : "Bearer ",
        }
    })
    .then(response => {
        if (response.status === 200) {
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