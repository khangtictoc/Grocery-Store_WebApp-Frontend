async function disableProduct(){
    var disableBtnLst = document.querySelectorAll('[disable-product-id]');
    disableBtnLst.forEach(function(element) {
        element.addEventListener('click', async function disableProduct(){
            const id = this.getAttribute("disable-product-id");
            const name = this.getAttribute("disable-product-name");
            const price = this.getAttribute("disable-product-price");
            const unit = this.getAttribute("disable-product-unit");
            const originalPrice = this.getAttribute("disable-product-originalPrice");
            const quantity = this.getAttribute("disable-product-quantity");
            const averageRating = this.getAttribute("disable-product-averageRating");
            const discountPercent = this.getAttribute("disable-product-discountPercent");
            const idCategory = this.getAttribute("disable-product-idCategory");
            const isActivated = this.getAttribute("disable-product-isActivated");

            const formData = new FormData();

            formData.append('id', id);
            formData.append('name', name);
            formData.append('price', price);
            formData.append('unit', unit);
            formData.append('originalPrice', originalPrice);
            formData.append('quantity', quantity);
            formData.append('averageRating', averageRating);
            formData.append('discountPercent', discountPercent);
            formData.append('idCategory', idCategory);
            formData.append('isActivated', isActivated);

            await fetch(`http://localhost:9099/product/updatebyid`, {
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
        });
    });
}