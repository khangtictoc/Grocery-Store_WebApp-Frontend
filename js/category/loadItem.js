$(document).ready(function(){
    $.ajax({
        url: "http://localhost:9099/category/getall",
        method: "GET",
        crossDomain: true
    }).done(function(response){
        console.log("server tra ve ", response)
        const path = "//*[@id='bs-megadropdown-tabs']/ul"
        const categoryLst = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        categoryLst.innerHTML=''

        const dataResult = response.data;
        for (let i = 0; i < dataResult.length; i++) {
            var data = dataResult[i];
            var divElement = document.createElement('li');
            divElement.innerHTML =
            `
                <a href="#">${data.categoryName}</a>
            `;
            categoryLst.appendChild(divElement);
        }
    })
})