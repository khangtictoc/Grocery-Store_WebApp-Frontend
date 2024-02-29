$(document).ready(function(){
    
    var cart = localStorage.getItem("giohang1")
    var cartValue = JSON.parse(cart)
    var name = localStorage.getItem("name")
    var phone = localStorage.getItem("phone")
    var address = localStorage.getItem("address")
    var city = localStorage.getItem("city")
    var addressType = localStorage.getItem("addresstype")
    function apiAddCheckout(name,phone,address,city,addressType) {
        return  $.ajax({
            url: "http://localhost:9099/checkout/add", //getting the api
            // data: JSON.stringify({idUser: 1, fullName: name,addressType: addressType,phoneNumber:phone,landMark:address,city:city,totalPrice:100,listIdOrder:"1" }),
            // data: 'fullName= abc, idUser=1 ,addressType=abc,phoneNumber=123,landMark=hcm,city=city,totalPrice=10,listIdOrder=1',
            data: { 'idUser': 1, 'fullName': name,'addressType': addressType,'phoneNumber':phone,'landMark':address,'city':city,'totalPrice':100,'listIdOrder':1},
            type: 'post',
            success: function(data) {
    
            }
        });
    }
    function apiAddOrder(idProduct,idUser,purchasePrice,quantity) {
        return  $.ajax({
            url: "http://localhost:9099/order/add", //getting the api
            // data: JSON.stringify({idUser: 1, fullName: name,addressType: addressType,phoneNumber:phone,landMark:address,city:city,totalPrice:100,listIdOrder:"1" }),
            // data: 'fullName= abc, idUser=1 ,addressType=abc,phoneNumber=123,landMark=hcm,city=city,totalPrice=10,listIdOrder=1',
            data: { 'idProduct': idProduct, 'idUser': idUser,'purchasePrice': purchasePrice,'quantity':quantity},
            type: 'post',
            success: function(data) {
    
            }
        });
    }
    $("body").on("click",".pay",function(data){
        
        for(var i=0;i<cartValue.length; i++ )
        {
            apiAddOrder(cartValue[i][0].id,1,cartValue[i][0].price,cartValue[i][1])
        }
        apiAddCheckout(name,phone,address,city,addressType);
        console.log("server tra ve ", data.data)
        localStorage.removeItem("name");
        localStorage.removeItem("phone");
        localStorage.removeItem("address");
        localStorage.removeItem("city");
        localStorage.removeItem("addresstype");
        
     })
     
     function submitForm(form){
        swal({
            title: "Bạn chắc chắn muốn mua hàng?",
            text: "Ok",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((isOkay)=>{
            if(isOkay){
                form.submit();
            }
        });
        return false;
    }
})
