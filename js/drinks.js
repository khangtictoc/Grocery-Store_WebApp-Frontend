$(document).ready(function(){
    //data : chỉ có khi tham số truyền ngầm
    // $.ajax({
    //     url: "http://127.0.0.1:5500/drinks/1",
    //     success: function(response) {
    //         //Do Something
    //         alert("I am an alert box!");
    //     },
    //     error: function(xhr) {
    //         //Do Something to handle error
    //     }
    // });
for(let i =1; i<3;i++)
{
    $.ajax({
        url: "http://localhost:9092/product/getByCategory",
        data:'categoryId='+i,
        method: "get",
        
    }).done(function(result){
        //localstorage
        var listProduct = result.data
        var html=''
        for(i=0;i<listProduct.length;i++){
            html+=`<div class="col-md-3 w3ls_w3l_banner_left">
            <div class="hover14 column">
            <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                <div class="agile_top_brand_left_grid_pos">
                    <img src="images/offer.png" alt=" " class="img-responsive" />
                </div>
                <div class="agile_top_brand_left_grid1">
                    <figure>
                        <div class="snipcart-item block">
                            <div class="snipcart-thumb">
                                <a href="single.html"><img src="images/${listProduct[i].image}" alt=" " class="img-responsive" /></a>
                                <p>${listProduct[i].name}</p>
                                <h4>$${(Math.round(listProduct[i].price * 100) / 100).toFixed(2)}<span>$ ${(Math.round(listProduct[i].originalPrice * 100) / 100).toFixed(2)}</span></h4>
                            </div>
                            <div class="snipcart-details">
                                <form action="#" method="post">
                                    <fieldset>
                                        <input type="hidden" name="cmd" value="_cart" />
                                        <input type="hidden" name="add" value="1" />
                                        <input type="hidden" name="business" value=" " />
                                        <input type="hidden" name="item_name" value="orange soft drink" />
                                        <input type="hidden" name="amount" value="5.00" />
                                        <input type="hidden" name="discount_amount" value="1.00" />
                                        <input type="hidden" name="currency_code" value="USD" />
                                        <input type="hidden" name="return" value=" " />
                                        <input type="hidden" name="cancel_return" value=" " />
                                        <input type="submit" name="submit" value="Add to cart" class="button" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
            </div>
        </div>`
            
        }
        $('#list-product'+i).append(html)
        console.log("server tra ve ", result.data)
    })
}
   
})