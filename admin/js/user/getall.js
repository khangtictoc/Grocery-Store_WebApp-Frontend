$(document).ready(function(){
    getAllUser().then(function() {
        disableUser();
    });
});


async function getAllUser(){
    await fetch("http://localhost:9099/user/getall",{
        method: "GET"
    })
    .then(response => response.json())
    .then(response => {
        console.log("server tra ve ", response)
        const path = "//*[@id='page-wrapper']/div/div/div/table/tbody"
        const userLst = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        userLst.innerHTML=''

        const dataResult = response.data;
        for (let i = 0; i < dataResult.length; i++) {
            var data = dataResult[i];
            var divElement = document.createElement('tr');
            divElement.innerHTML =
            `
             <th scope="row">${data.id}</th>
             <td>${data.username}</td>
             <td>${data.email}</td>
             <td>${data.role.name}</td>
             <td>${data.fullname}</td>
             <td>${data.phoneNumber}</td>
             <td>${data.avatar}</td>
             <td>${data.activated}</td>
             <td>
                <div class="container">
                    <button delete-user-id="${data.id}" type="button" class="btn btn-danger">Delete</button>
                    <button disable-user-id="${data.id}"
                            disable-user-username="${data.username}"
                            disable-user-password="${data.password}"
                            disable-user-email="${data.email}"
                            disable-user-roleId="${data.role.id}"
                            disable-user-fullname="${data.fullname}"
                            disable-user-phoneNumber="${data.phoneNumber}"
                            disable-user-avatar="${data.avatar}"
                            disable-user-isActivated="0"
                            type="button" class="btn btn-danger">Disable</button>
                </div>
            </td>
            `;
            userLst.appendChild(divElement);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    })
}