/* navigation for tabs in product page */
function browseProducts(evt, productCategory) {
    var i, availableProducts, tablinks; 
    availableProducts = document.getElementsByClassName("availableProducts");
    for (i = 0; i < availableProducts.length; i++) {
      availableProducts[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(productCategory).style.display = "grid";
    evt.currentTarget.className += " active";
  }