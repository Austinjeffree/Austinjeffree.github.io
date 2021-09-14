/* navigation for tabs in product page */
function browseProducts(evt, productCategory) {
    var i, availableProducts; 
    availableProducts = document.getElementsByClassName("availableProducts");
    for (i = 0; i < availableProducts.length; i++) {
      availableProducts[i].style.display = "none";
    }

    document.getElementById(productCategory).style.display = "grid";
    evt.currentTarget.className += " active";
  }


var close = document.getElementsByClassName("close");
 
function openProduct(productInfo) {
    document.getElementById(productInfo).style.display = "block";

}

function closeProduct(productInfo) {;
    document.getElementById(productInfo).style.display = "none";
    
}
