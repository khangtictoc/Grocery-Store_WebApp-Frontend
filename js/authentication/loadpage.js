window.onload = function() {
    var jwtTokenData = localStorage.getItem('userData');
    if  (jwtTokenData == undefined || jwtTokenData.trim().length == 0){
        window.location.href = 'forbidden.html';
    }
}