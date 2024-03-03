$(document).ready(function(){
    getAllCategory().then(function() {
        deleteCategory();
    });
});


async function getAllCategory(){
    await fetch("http://localhost:9099/category/getall",{
        method: "GET"
    })
    .then(response => response.json())
    .then(response => {
        console.log("server tra ve ", response)
        const path = "//*[@id='page-wrapper']/div/div/div/table/tbody"
        const categoryLst = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        categoryLst.innerHTML=''

        const dataResult = response.data;
        for (let i = 0; i < dataResult.length; i++) {
            var data = dataResult[i];
            var divElement = document.createElement('tr');
            divElement.innerHTML =
            `
            <th scope="row">${data.id}</th>
            <td>${data.categoryName}</td>
            <td><button category-id="${data.id}" type="button" class="btn btn-danger">Delete</button></td>
            `;
            categoryLst.appendChild(divElement);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    })
}