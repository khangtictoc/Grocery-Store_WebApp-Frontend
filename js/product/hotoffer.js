$(document).ready(function(){
    $.ajax({
        url: "http://localhost:9099/product/getbestsalerproductsbycategory",
        method: "get",
        data: {
            idCategory : 1,
            topNumber : 4
        }
    }).done(function(response){
        console.log("server tra ve ", response)
        const path = "/html/body/div[5]/div/div"
        const categoryLst = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        categoryLst.innerHTML = '<div class="agile_top_brands_grids"></div>'

        const dataResult = response.data;
        for (let i = 0; i < dataResult.length; i++) {
            var data = dataResult[i];
            var divElement = document.createElement('div');
            divElement.className = "col-md-3 top_brand_left";
            divElement.innerHTML =
            `
            <div class="hover14 column">
                <div class="agile_top_brand_left_grid">
                    <div class="tag"><img src="images/tag.png" alt=" " class="img-responsive"></div>
                    <div class="agile_top_brand_left_grid1">
                        <figure>
                            <div class="snipcart-item block">
                                <div class="snipcart-thumb">
                                    <a href="http://localhost:5500/single.html?id=${data.id}"><img alt="${data.name}" src="${data.image}"></a>		
                                    <p>${data.name}</p>
                                    <h4>${data.originalPrice}<span>${data.price}</span></h4>
                                </div>
                                <div class="snipcart-details top_brand_home_details">
                                    <form action="checkout.html" method="post">
                                        <fieldset>
                                            <input type="hidden" name="cmd" value="_cart">
                                            <input type="hidden" name="add" value="1">
                                            <input type="hidden" name="business" value=" ">
                                            <input type="hidden" name="item_name" value="Fortune Sunflower Oil">
                                            <input type="hidden" name="amount" value="7.99">
                                            <input type="hidden" name="discount_amount" value="1.00">
                                            <input type="hidden" name="currency_code" value="USD">
                                            <input type="hidden" name="return" value=" ">
                                            <input type="hidden" name="cancel_return" value=" ">
                                            <input type="submit" name="submit" value="Add to cart" class="button">
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
            `;
            categoryLst.appendChild(divElement);
        }
    })
})