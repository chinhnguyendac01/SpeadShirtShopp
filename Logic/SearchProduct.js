//search product
var data = [
     {
       names: "White men's shirt",
       type: "Shirt",
       price: "$3,000",
       image: "./public/img/shirt/shirts1.jpg",
     },
     {
       names: "FLATSEVEN Mens Slim Fit Stripe Patched Casual Dress Shirts",
       type: "Shirt",
       price: "$1,500",
       image: "./public/img/shirt/shirts2.jpg",
     },
     {
       names: "Men's Hollow Out Trend",
       type: "Shirt",
       price: "$2,000",
       image: "./public/img/shirt/shirt3.jpg",
     },
     {
       names: "Striped shirt",
       type: "Shirt",
       price: "$2,000",
       image: "./public/img/shirt/shirt4.jpg",
     },
     {
       names: "Daisy Floral Print Ruched Bust Dress",
       type: "Dress",
       price: "$5,000",
       image: "./public/img/dress/dress1.jpg",
     },
     {
       names: "Floral Embroidered Keyhole Back Dress",
       type: "Dress",
       price: "$4,000",
       image: "./public/img/dress/dress2.jpg",
     },
     {
       names: "Nordstrom Tiger Mist Portland Long Sleeve Minidress",
       type: "Dress",
       price: "$3,000",
       image: "./public/img/dress/dress3.jpg",
     },
     {
       names: "Shift Dress",
       type: "Dress",
       price: "$3,500",
       image: "./public/img/dress/dress4.jpg",
     },
     {
       names: "Shift Dress",
       type: "Dress",
       price: "$3,500",
       image: "./public/img/dress/dress4.jpg",
     },
     {
       names: "Shift Dress",
       type: "Dress",
       price: "$3,500",
       image: "./public/img/dress/dress4.jpg",
     },
     {
       names: "Shift Dress",
       type: "Dress",
       price: "$3,500",
       image: "./public/img/dress/dress4.jpg",
     },
     {
       names: "Shift Dress",
       type: "Dress",
       price: "$3,500",
       image: "./public/img/dress/dress4.jpg",
     },
     {
       names: "Shift Dress",
       type: "Dress",
       price: "$3,500",
       image: "./public/img/dress/dress4.jpg",
     },
     {
       names: "Shift Dress",
       type: "Dress",
       price: "$3,500",
       image: "./public/img/dress/dress4.jpg",
     },
     {
       names: "Shift Dress",
       type: "Dress",
       price: "$3,500",
       image: "./public/img/dress/dress4.jpg",
     },
     {
       names: "Shift Dress",
       type: "Dress",
       price: "$3,500",
       image: "./public/img/dress/dress4.jpg",
     },
     {
       names: "Shift Dress",
       type: "Dress",
       price: "$3,500",
       image: "./public/img/dress/dress4.jpg",
     },
     {
       names: "Shift Dress",
       type: "Dress",
       price: "$3,500",
       image: "./public/img/dress/dress4.jpg",
     },
     {
       names: "White men's shirt",
       type: "Shirt",
       price: "$3,000",
       image: "./public/img/shirt/shirts1.jpg",
     },
   ];
   
   var namess = "",
     products = "",
     types = "";
     prices = "";
   for (var i = 0; i < data.length; i++) {
     var names = data[i].names,
       type = data[i].type,
       price = data[i].price,
       rawPrice = price.replace("$", ""),
       rawPrice = parseInt(rawPrice.replace(",", "")),
       image = data[i].image;
   
     //create product cards
     products +=
       "<div class='Jquery Jquery7' data-name='" +
       names +
       "' data-type='" +
       type +
       "' data-price='" +
       rawPrice +
       "'><h2>"+ names +"</h2><figure class='snip1246'><div class='ImgCustom'><img class= 'product-image' src='"+ image +"' alt='sample77'/></div><figcaption><div class='ImgCustom'><img class= 'product-image' src='"+ image +"' alt='sample77'/></div><h2>"+type+"</h2><p>"+names+"</p><div class='price'>"+price+"</div><button href='#' class='add-to-cart'>Add to Cart</button></figcaption></figureclass><a href='#'>More details</a></div>";
     //create dropdown of types
     if (
       types.indexOf("<option value='" + type + "'>" + type + "</option>") == -1
     ) {
       types += "<option value='" + type + "'>" + type + "</option>";
     }
   
     if (
       namess.indexOf("<option value='" + names + "'>" + names + "</option>") == -1
     ) {
       namess += "<option value='" + names + "'>" + names + "</option>";
     }
     if (
        prices.indexOf("<option value='" + names + "'>" + names + "</option>") == -1 
      ) {    
              prices += "<option value='" + rawPrice + "'>"+ rawPrice +"</option>";
          
      }
   }
   
   $("#products").html(products);
   $(".filter-names").append(namess);
   $(".filter-price").append(prices)
   // $(".filter-make").append(makes);
   // $(".filter-model").append(models);
   $(".filter-type").append(types);
   
   var filtersObject = {};
   
   //on filter change
   $(".filter").on("change", function () {
     var filterName = $(this).data("filter"),
       filterVal = $(this).val();
    
     if (filterVal == "") {
       delete filtersObject[filterName];
     
     } else {
       filtersObject[filterName] = filterVal;
     
     }
   
     var filters = "";
   
     for (var key in filtersObject) {
       if (filtersObject.hasOwnProperty(key)) {
         filters += "[data-" + key + "='" + filtersObject[key] + "']";
       }
     }
   
     if (filters == "") {
       $(".Jquery").show();
      
     } else {
       $(".Jquery").hide();
       $(".Jquery").hide().filter(filters).show();
       
     }
     
   });
   
   //on search form submit
   
   $("#search-form").submit(function (e) {
     e.preventDefault();
     var query = $("#search-form input").val().toLowerCase();
   
     $(".Jquery").hide();
     $(".Jquery").each(function () {
       var names = $(this).data("name").toLowerCase(),
         type = $(this).data("type").toLowerCase();
       
       if (
         // make.indexOf(query) > -1 ||
         // model.indexOf(query) > -1 ||
         type.indexOf(query) > -1 ||
         names.indexOf(query) > -1
       ) {  
         $(this).show();
        
       }else{
         $(this).hide();
       }
     });
   });
   