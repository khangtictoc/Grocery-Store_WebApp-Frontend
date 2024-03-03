$(document).ready(function(){
    getAllRole().then(function() {
        deleteRole();
    });
});


async function getAllRole(){
    await fetch("http://localhost:9099/role/getall",{
        method: "GET"
    })
    .then(response => response.json())
    .then(response => {
        console.log("server tra ve ", response)
        const path = "//*[@id='page-wrapper']/div/div/div/table/tbody"
        const roleLst = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        roleLst.innerHTML=''

        const dataResult = response.data;
        for (let i = 0; i < dataResult.length; i++) {
            var data = dataResult[i];
            var divElement = document.createElement('tr');
            divElement.innerHTML =
            `
                <th scope="row">${data.id}</th>
                <td>${data.name}</td>
                <td>${data.description}</td>
                <td><button role-id="${data.id}" type="button" class="btn btn-danger">Delete</button></td>
            `;
            roleLst.appendChild(divElement);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    })
}

