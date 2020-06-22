
window.onscroll = function() {myFunction()};

var head = document.getElementById("myHeader");
var sticky = head.offsetTop;

function myFunction() {
      if (window.pageYOffset > sticky) {
        head.classList.add("sticky");
      } else {
        head.classList.remove("sticky");
      }
}


function selectImg(event,imgView){
  
      var i , slectedItem, listItemA ;

      tabcontent = document.getElementsByClassName("slected-item");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByClassName("list-item-a");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
      }
      document.getElementById(imgView).style.display = "block";
      event.currentTarget.className += " active";
}

//gemstones quality change

 var PriceGems = {
                '1-price'   : 6560,
                '2-price'   : 7666,
                '3-price'   : 6450,
                '4-price'   : 5140,
         };


 function gemsQuality(gemsQuality){


         var GemsPik = document.getElementsByClassName("gemImg");
              for (let i = 0; i < GemsPik.length; i++) {
              GemsPik[i].className = GemsPik[i].className.replace("active");

         }

          event.currentTarget.className += " active";

         var changPrice = PriceGems[gemsQuality+"-price"];
          
           $('.pricechange').text(changPrice);

 }

// carat price change
var PriceCarat = {
                '1-price'   : 4236,
                '2-price'   : 6000,
                '3-price'   : 1562,
                '4-price'   : 1803,
         };


 function caratQuality(caratQuality){


         var caratPik = document.getElementsByClassName("carat-img");
              for (let i = 0; i < caratPik.length; i++) {
              caratPik[i].className = caratPik[i].className.replace("active");

         }

          event.currentTarget.className += " active";

         var changGemPrice = PriceCarat[caratQuality+"-price"];
          
           $('.pricechange').text(changGemPrice);

 }
// metal price change

       var PriceChngs = {
                '1-item'   : 3500,
                '2-item'   : 7000,
                '3-item'   : 6400,
                '4-item'   : 540,
         };

         var metalName ={
               '1-metal' : "Rose Gold",
               '2-metal' : "Yellow Gold",
               '3-metal' : "White Gold",
               '4-metal' : "Platinum",
         }

 function PriceChng(PriceChng){


         var MetalPik = document.getElementsByClassName("metal-img");
              for (let i = 0; i < MetalPik.length; i++) {
              MetalPik[i].className = MetalPik[i].className.replace("active");

         }

          event.currentTarget.className += " active";

         var changItem = PriceChngs[PriceChng+"-item"];
          
           $('.pricechange').text(changItem);

 }








// var arr = [3500, 7000, 6400, 542];
// var chngElm = document.querySelectorAll(".pricechange");
// function PriceChng(evnt){
  
//      for(let j=0; j<arr.length; j++){
//        priceValue = arr[j];
//      }
//      for (let i = 0; i < chngElm.length; i++) {
//            chngElm[i].innerHTML = "$"+  priceValue;
//       }
          
// }

