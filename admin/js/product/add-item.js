function addProduct(){
    const name = document.getElementById("inputName").value;
    const description = document.getElementById("inputDescription").value;
    const image = document.getElementById("inputImage");
    const price = document.getElementById("inputPrice").value;
    const unit = document.getElementById("inputUnit").value;
    const originalPrice = document.getElementById("inputOriginalPrice").value;
    const quantity = document.getElementById("inputQuantity").value;
    const averageRating = document.getElementById("inputRating").value;
    const discountPercent = document.getElementById("inputDiscount").value;
    const idCategory = document.getElementById("inputCategory").value;

    const formData = new FormData();

    formData.append('name', name);
    formData.append('description', description);
    for (const file of image.files) {
        formData.append("file", file);
    }
    formData.append('price', price);
    formData.append('unit', unit);
    formData.append('originalPrice', originalPrice);
    formData.append('quantity', quantity);
    formData.append('averageRating', averageRating);
    formData.append('discountPercent', discountPercent);
    formData.append('idCategory', idCategory);


    fetch('http://localhost:9099/product/insert', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        console.log("server tra ve ", response)
        if (response.status === 200) {
            window.location.href = '../../template/table/product.html';
        }
        else if (response.status === 403) {
            window.location.href = '../../404.html';
        }
        else {
            window.location.href = '../../500.html';
        }
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("btn-add").addEventListener('click', addProduct);