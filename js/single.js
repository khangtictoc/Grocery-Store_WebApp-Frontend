/*[ Ajax call API ]
    ===========================================================*/

    // $(document).ready(function(){

    //     //localStorage.setItem('idProduct',1)
    //     //var idProduct = localStorage.getItem('idProduct')
    //     const queryString = window.location.search;
    //     const urlParams = new URLSearchParams(queryString);
    //     var idProduct = urlParams.get("id")
    //     console.log(idProduct)

    //     $.ajax({
    //         url: "http://localhost:9099/product/id/"+idProduct,
    //         method: "get",
    //         // data: {
    
    //         // // }
    //     }).done(function(data){
    //         var product =data.data
    //         console.log(product);
    //         var returnHtml=`
    //         <h5>${product.productName}</h5>
    //         <div class="col-md-4 agileinfo_single_left">
    //             <img id="example" src="${product.productImage}" alt=" " class="img-responsive" />
    //         </div>
    //         <div class="col-md-8 agileinfo_single_right">
    //             <div class="rating1">
    //                 <span class="starRating">
    //                     <input id="rating5" type="radio" name="rating" value="5">
    //                     <label for="rating5">5</label>
    //                     <input id="rating4" type="radio" name="rating" value="4">
    //                     <label for="rating4">4</label>
    //                     <input id="rating3" type="radio" name="rating" value="3" checked>
    //                     <label for="rating3">3</label>
    //                     <input id="rating2" type="radio" name="rating" value="2">
    //                     <label for="rating2">2</label>
    //                     <input id="rating1" type="radio" name="rating" value="1">
    //                     <label for="rating1">1</label>
    //                 </span>
    //             </div>
    //             <div class="w3agile_description">
    //                 <h4>Description :</h4>
    //                 <p>${product.productDescription}</p>
    //             </div>
    //             <div class="snipcart-item block">
    //                 <div class="snipcart-thumb agileinfo_single_right_snipcart">
    //                     <h4>${product.productPrice}<span>$25.00</span></h4>
    //                 </div>
    //                 <div class="snipcart-details agileinfo_single_right_details">
    //                     <form action="#" method="post">
    //                         <fieldset>
    //                             <input type="hidden" name="cmd" value="_cart" />
    //                             <input type="hidden" name="add" value="1" />
    //                             <input type="hidden" name="business" value=" " />
    //                             <input type="hidden" name="item_name" value="pulao basmati rice" />
    //                             <input type="hidden" name="amount" value="21.00" />
    //                             <input type="hidden" name="discount_amount" value="1.00" />
    //                             <input type="hidden" name="currency_code" value="USD" />
    //                             <input type="hidden" name="return" value=" " />
    //                             <input type="hidden" name="cancel_return" value=" " />
    //                             <input type="submit" name="submit" value="Add to cart" class="button" />
    //                         </fieldset>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="clearfix"> </div> `

    //         document.getElementById("sanpham_chitiet").innerHTML=returnHtml;
    //         //document.getElementById("sanpham_chitiet").appendChild(returnHtml);

    //     })
        
        
    // })

    ////////////////////////////////////////////// TEST GPT //////////////////////////////////////////////////////////
    $(document).ready(function(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        var idProduct = urlParams.get("id");
    
        $.ajax({
            url: "http://localhost:9099/product/id/" + idProduct,
            method: "get",
        }).done(function(data){
            var product = data.data;
            var returnHtml = `<h5>${product.productName} ${product.productUnit}</h5>
            <div class="col-md-4 agileinfo_single_left">
                <img id="example" src="${product.productImage}" alt=" " class="img-responsive" />
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
                    <p>${product.productDescription}</p>
                </div>
                <div class="snipcart-item block">
                    <div class="snipcart-thumb agileinfo_single_right_snipcart">
                        <h4>${product.productPrice} VNĐ<span> 25000 VNĐ</span></h4>
                    </div>
                    <div class="snipcart-details agileinfo_single_right_details">
                        <form action="#" method="get">
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
                                <input type="button" name="submit" value="Add to cart" class="btn-cart button" json-data='${JSON.stringify(product)}'/>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <div class="clearfix"> </div>`

          $('#sanpham_chitiet').append(returnHtml);
          
        });

        var categoryName01 = "FOOD";
        var categoryName02 = "BEVERAGES";
        var categoryName03 = "VEGIES";

        // 1st Category

        $.ajax({
            url: "http://localhost:9099/product/getbestsalerproductsbycategory",
            method: "get",
            data: {
                idCategory : 1,
                topNumber : 4   
            }
        }).done(function(data){
            var listProduct =data.data
            //console.log(listProduct);
            
            var html=`<div class="w3ls_w3l_banner_nav_right_grid1">
            <h6>${categoryName01}</h6>`

            // 4 div product
            listProduct.forEach(element => {
                var jsonProduct = JSON.stringify(element)
                //console.log(element.productName);
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
                                    <a href="http://127.0.0.1:5500/single.html?id=${element.productId}"><img src="${element.productImage}" alt=" " class="img-responsive" /></a>
                                    <p>${element.productName} (${element.productUnit})</p>
                                    <h4>${element.productPrice} VNĐ<span>50000 VNĐ</span></h4>
                                </div>
                                <div class="snipcart-details">
                                    <form action="#" method="get">  
                                        <fieldset>
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="business" value=" " />
                                            <input type="hidden" name="item_name" value="knorr instant soup" />
                                            <input type="hidden" name="amount" value="3.00" />
                                            <input type="hidden" name="discount_amount" value="1.00" />
                                            <input type="hidden" name="currency_code" value="USD" />
                                            <input type="hidden" name="return" value=" " />
                                            <input type="hidden" name="cancel_return" value=" " />
                                            <input type="button" name="submit" value="Add to cart" class="btn-cart button" json-data='${jsonProduct}' />
                                        </fieldset>
                                    </form>  
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
                </div>
            </div>
            `
            })
            html+=`<div class="clearfix"> </div>
                    </div>`

            $('#list-cat').append(html)

        });
        
        // 2nd Category
        $.ajax({
            url: "http://localhost:9099/product/getbestsalerproductsbycategory",
            method: "get",
            data: {
                idCategory : 2,
                topNumber : 4   
            }
        }).done(function(data){
            var listProduct =data.data
            //console.log(listProduct);
            
            var html=`<div class="w3ls_w3l_banner_nav_right_grid1">
            <h6>${categoryName02}</h6>`

            // 4 div product
            listProduct.forEach(element => {
                var jsonProduct = JSON.stringify(element)
                //console.log(element.productName);
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
                                    <a href="http://127.0.0.1:5500/single.html?id=${element.productId}"><img src="${element.productImage}" alt=" " class="img-responsive" /></a>
                                    <p>${element.productName} (${element.productUnit})</p>
                                    <h4>${element.productPrice} VNĐ<span>50000 VNĐ</span></h4>
                                </div>
                                <div class="snipcart-details">
                                    <form action="#" method="get">
                                        <fieldset>
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="business" value=" " />
                                            <input type="hidden" name="item_name" value="knorr instant soup" />
                                            <input type="hidden" name="amount" value="3.00" />
                                            <input type="hidden" name="discount_amount" value="1.00" />
                                            <input type="hidden" name="currency_code" value="USD" />
                                            <input type="hidden" name="return" value=" " />
                                            <input type="hidden" name="cancel_return" value=" " />
                                            <input type="button" name="submit" value="Add to cart" class="btn-cart button" json-data='${jsonProduct}'/>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
                </div>
            </div>
            `
            })
            html+=`<div class="clearfix"> </div>
                    </div>`

            $('#list-cat').append(html)

        });

        // 3rd Category     
        $.ajax({
            url: "http://localhost:9099/product/getbestsalerproductsbycategory",
            method: "get",
            data: {
                idCategory : 3,
                topNumber : 4   
            }
        }).done(function(data){
            var listProduct =data.data
            //console.log(listProduct);
            
            var html=`<div class="w3ls_w3l_banner_nav_right_grid1">
            <h6>${categoryName03}</h6>`

            // 4 div product
            listProduct.forEach(element => {
                var jsonProduct = JSON.stringify(element)
                //console.log(element.productName);
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
                                    <a href="http://127.0.0.1:5500/single.html?id=${element.productId}"><img src="${element.productImage}" alt=" " class="img-responsive" /></a>
                                    <p>${element.productName} (${element.productUnit})</p>
                                    <h4>${element.productPrice} VNĐ<span>50000 VNĐ</span></h4>
                                </div>
                                <div class="snipcart-details">
                                    <form action="#" method="get">
                                        <fieldset>
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="business" value=" " />
                                            <input type="hidden" name="item_name" value="knorr instant soup" />
                                            <input type="hidden" name="amount" value="3.00" />
                                            <input type="hidden" name="discount_amount" value="1.00" />
                                            <input type="hidden" name="currency_code" value="USD" />
                                            <input type="hidden" name="return" value=" " />
                                            <input type="hidden" name="cancel_return" value=" " />
                                            <input type="button" name="submit" value="Add to cart" class="btn-cart button" json-data='${jsonProduct}' />
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
                </div>
            </div>
            `
            })
            html+=`<div class="clearfix"> </div>
                    </div>`

            $('#list-cat').append(html)

        });
        

        $("body").on("click",".btn-cart",function(){
            var dataJson = $(this).attr("json-data") // Ở đây là chuỗi
            var getObject = JSON.parse(dataJson)
            Swal.fire({
                title: "Chọn sản phẩm thành công",
                icon: "success",
                showConfirmButton: false,
                timer: 900
              });
            //console.log(dataJson)
            var cart = localStorage.getItem("giohang1")
            //console.log(arrayCart)
             //console.log(cartData)
     
             if(cart == undefined || cart == null || cart ==""){
                 var arrayCart = []
                 var quantityCart =[1]
                 arrayCart.push(JSON.parse(dataJson)) // JSON.parse: parse chuỗi về đối tượng
                 var resultCart = arrayCart.map(function(e, i) {return [e, quantityCart[i]];});


                 localStorage.setItem("giohang1",JSON.stringify(resultCart))
                 //localStorage.setItem("giohang1",JSON.stringify(resultCart))
                 console.log("Chua co define array cart")
             }else{
    
                var resultCart = JSON.parse(cart) // Sau khi get cartData từ local storage va parse ve doi tuong
                var flag = false;
                // check product is exist
                for(var i=0;i<resultCart.length; i++ ){
                    var productName = resultCart[i][0].productName;
                    console.log("check product name "+productName)
                    console.log("check json-data name "+getObject.productName)
                    if (productName==getObject.productName){
                        resultCart[i][1] = resultCart[i][1]+1;
                        flag=true;
                    }
                }
                if(!flag){
                // do not have this product -> recreate  
                resultCart.push([JSON.parse(dataJson),1]);
                }


                //arrayCart.push(JSON.parse(dataJson))
                localStorage.setItem("giohang1",JSON.stringify(resultCart))
                console.log("Da define array cart "+flag)
             }
     
            

         })

    });
    