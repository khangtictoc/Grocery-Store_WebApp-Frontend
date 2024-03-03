$(document).ready(function () {
    getAllProduct().then(function () {
        disableProduct();
    });
});


async function getAllProduct() {
    await fetch("http://localhost:9099/product/getall", {
        method: "GET"
    })
        .then(response => response.json())
        .then(response => {
            console.log("server tra ve ", response)
            const path = "//*[@id='page-wrapper']/div/div/div/table/tbody"
            const productLst = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            productLst.innerHTML = ''

            const dataResult = response.data;
            for (let i = 0; i < dataResult.length; i++) {
                var data = dataResult[i];
                var divElement = document.createElement('tr');
                divElement.innerHTML =
                    `
                <th scope="row">${data.id}</th>
                <td>${data.name}</td>
                <td>${data.description}</td>
                <td>${data.image}</td>
                <td>${data.price}</td>
                <td>${data.unit}</td>
                <td>${data.originalPrice}</td>
                <td>${data.quantity}</td>
                <td>${data.averageRating}</td>
                <td>${data.discountPercent}</td>
                <td>${data.category.name}</td>
                <td>${data.activated}</td>
                <td>
                    <div class="container">
                        <button delete-product-id="${data.id}" type="button" class="btn btn-danger">Delete</button>
                        <button disable-product-id="${data.id}" 
                                disable-product-name="${data.name}"
                                disable-product-price="${data.price}"
                                disable-product-unit="${data.unit}"
                                disable-product-originalPrice="${data.originalPrice}"
                                disable-product-quantity="${data.quantity}"
                                disable-product-averageRating="${data.averageRating}"
                                disable-product-discountPercent="${data.discountPercent}"
                                disable-product-idCategory="${data.category.id}"
                                disable-product-isActivated="0"
                                type="button" class="btn btn-danger">Disable</button>
                    </div>
                </td>

            `;
                productLst.appendChild(divElement);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        })
}