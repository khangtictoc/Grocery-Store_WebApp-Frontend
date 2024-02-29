$(document).ready(function(){
    
    var cart = localStorage.getItem("giohang1")
    var cartValue = JSON.parse(cart)
    var html=''
    html+=` abc
    <table class="timetable_sub">
    <thead>
        <tr>
            <th>SL No.</th>	
            <th>Product</th>
            <th>Quantity</th>
            <th>Product Name</th>
        
            <th>Price</th>
            <th>Remove</th>
        </tr>
    </thead>`
    for(var item in cartValue){
        var jsonProduct = JSON.stringify(cartValue[item][0])
        html+=`<tbody><tr class="rem1">
        <td class="invert">1</td>
        <td class="invert-image"><a href="single.html"><img src="http://localhost:9099/file/${cartValue[item][0].image}" alt=" " class="img-responsive"></a></td>
        <td class="invert">
             <div class="quantity"> 
                <div class="quantity-select">                           
                    <div class="entry value-minus" json-data='${jsonProduct}'>&nbsp;</div>
                    <div class="entry value" id="quantity${cartValue[item][0].id}"><span>${cartValue[item][1]}</span></div>
                    <div class="entry value-plus active" json-data='${jsonProduct}' >&nbsp;</div>
                </div>
            </div>
        </td>
        <td class="invert" id="name${cartValue[item][0].id}">${cartValue[item][0].name}</td>
        
        <td class="invert" id="price${cartValue[item][0].id}">${cartValue[item][0].price*cartValue[item][1]} VNĐ</td>
        <td class="invert">
            <div class="rem">
                <div class="close1" json-data='${jsonProduct}' > </div>
            </div>

        </td>
    </tr>
    
    

</tbody>`
    }
    html+=`</table>`
$('#giohang').append(html)

    var html2=''
    var totalPrice =0;
    html2+=`<h4>Continue to basket</h4>
    <ul>`
    for(var item2 in cartValue){
        html2+=`<li>${cartValue[item2][0].name} <i>-</i> <span style="list-style-type: none;margin-bottom: 1em;font-size: 14px;color: #999;" id="${cartValue[item2][0].id}"}>${cartValue[item2][0].price*cartValue[item2][1]} VNĐ</span></li>
        <li></li>

        `
        totalPrice=totalPrice+cartValue[item2][0].price*cartValue[item2][1]
    }
        html2+=`
        <ul style="font-size: 1em;color: #212121;font-weight: 600;padding: 1em 0;border-top: 1px solid #DDD;border-bottom: 1px solid #DDD;margin: 2em 0 0;">
        <li style="font-size: 1.2em;color: #212121;font-weight: 600;padding: 1em 0;">Total <i>-</i> <span id="totalPrice">${totalPrice} VNĐ</span></li>
        </ul>
    </ul>`
      $('#bill').append(html2)
console.log("server tra ve ")
 //Click dấu cộng số lượng
$("body").on("click",".value-plus",function(){
    var dataJson = $(this).attr("json-data") // Ở đây là chuỗi
    var getObject = JSON.parse(dataJson)
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
            var productId = resultCart[i][0].id;
            console.log("check product name "+productId)
            console.log("check json-data name "+getObject.productId)
            if (productId==getObject.id){
                resultCart[i][1] = resultCart[i][1]+1;
                flag=true;
                document.getElementById("quantity"+productId).innerHTML = resultCart[i][1];
                document.getElementById("price"+productId).innerHTML = resultCart[i][0].price*resultCart[i][1]+" VNĐ";
                totalPrice=totalPrice+resultCart[i][0].price;
                document.getElementById("totalPrice").innerHTML = totalPrice+" VNĐ";
                document.getElementById(resultCart[i][0].id).innerHTML = resultCart[i][0].price*resultCart[i][1]+" VNĐ";
                
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
 //Click dấu trừ số lượng
 $("body").on("click",".value-minus",function(){
    var dataJson = $(this).attr("json-data") // Ở đây là chuỗi
    var getObject = JSON.parse(dataJson)
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
            var productId = resultCart[i][0].id;
            console.log("check product name "+productId)
            console.log("check json-data name "+getObject.productId)
            if (productId==getObject.id){
                resultCart[i][1] = resultCart[i][1]-1;
                flag=true;
                document.getElementById("quantity"+productId).innerHTML = resultCart[i][1];
                document.getElementById("price"+productId).innerHTML = resultCart[i][0].price*resultCart[i][1]+" VNĐ";
                totalPrice=totalPrice-resultCart[i][0].price;
                document.getElementById("totalPrice").innerHTML = totalPrice+" VNĐ";
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
 //Click remove sản phẩm
 $("body").on("click",".close1",function(){
    var dataJson = $(this).attr("json-data") // Ở đây là chuỗi
    var getObject = JSON.parse(dataJson)
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
            var productId = resultCart[i][0].id;
            // resultCart.splice(i,1);
            if (productId==getObject.id){
                resultCart.splice(i,1);            
            }
        }
        localStorage.setItem("giohang1", JSON.stringify(resultCart)); 
        window.location.reload();
        console.log("Da define array cart "+flag)
     }
 })

//Click qua trang payment
$("body").on("click",".order",function(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var addresstype = document.getElementById("addresstype").value;

    localStorage.setItem("name",name)
    localStorage.setItem("phone",phone)
    localStorage.setItem("address",address)
    localStorage.setItem("city",city)
    localStorage.setItem("addresstype",addresstype)
})


})
