function updateProduct(){
    const id = document.getElementById("updateId").value;
    const name = document.getElementById("updateName").value;
    const description = document.getElementById("updateDescription").value;
    const image = document.getElementById("updateImage");
    const price = document.getElementById("updatePrice").value;
    const unit = document.getElementById("updateUnit").value;
    const originalPrice = document.getElementById("updateOriginalPrice").value;
    const quantity = document.getElementById("updateQuantity").value;
    const averageRating = document.getElementById("updateRating").value;
    const discountPercent = document.getElementById("updateDiscount").value;
    const idCategory = document.getElementById("updateCategory").value;
    const isActivated = document.getElementById("updateIsActivated").value;

    const formData = new FormData();

    formData.append('id', id);
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
    formData.append('isActivated', isActivated);

    fetch('http://localhost:9099/product/updatebyid', {
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

document.getElementById("btn-update").addEventListener('click', updateProduct);