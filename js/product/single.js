$(document).ready(function(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var idProduct = urlParams.get("id");
    $.ajax({
        url: "http://localhost:9099/product/id/" + idProduct,
        method: "GET"
    }).done(function(response){
        console.log("server tra ve ", response)
        const dataResult = response.data;

        const documentDetail = document.getElementById('product_detail');
        documentDetail.innerHTML= ''
        documentDetail.innerHTML =
        `
        <h5>${dataResult.name}</h5>
        <div class="col-md-4 agileinfo_single_left">
            <img id="example" src="${dataResult.image}" alt="${dataResult.name}" class="img-responsive" />
        </div>
        <div class="col-md-8 agileinfo_single_right">
            <div class="rating1">
                <span class="starRating">
                    <input id="rating5" type="radio" name="rating" value="5">
                    <label for="rating5">5</label>
                    <input id="rating4" type="radio" name="rating" value="4">
                    <label for="rating4">4</label>
                    <input id="rating3" type="radio" name="rating" value="3" checked>
                    <label for="rating3">3</label>
                    <input id="rating2" type="radio" name="rating" value="2">
                    <label for="rating2">2</label>
                    <input id="rating1" type="radio" name="rating" value="1">
                    <label for="rating1">1</label>
                </span>
            </div>
            <div class="w3agile_description">
                <h4>Description :</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur.</p>
            </div>
            <div class="snipcart-item block">
                <div class="snipcart-thumb agileinfo_single_right_snipcart">
                    <h4>${dataResult.price}<span>${dataResult.originalPrice}</span></h4>
                </div>
                <div class="snipcart-details agileinfo_single_right_details">
                    <form action="#" method="post">
                        <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input type="hidden" name="item_name" value="pulao basmati rice" />
                            <input type="hidden" name="amount" value="21.00" />
                            <input type="hidden" name="discount_amount" value="1.00" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <input type="hidden" name="return" value=" " />
                            <input type="hidden" name="cancel_return" value=" " />
                            <input type="submit" name="submit" value="Add to cart" class="button" />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
        <div class="clearfix"> </div>
        `;
    })
})