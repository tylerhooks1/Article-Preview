var activeMenuMobile = document.getElementById("activeMenuMobile");
var shareButtonMobile = document.getElementById("shareButtonMobile");

var activeButton = document.getElementById("activeButton");
shareButtonMobile.addEventListener("click", shareButtonClicked);
activeButton.addEventListener("click", activeButtonClicked);


function shareButtonClicked() {
    if (activeMenuMobile.classList.contains("d-none")) {
        activeMenuMobile.classList.remove("d-none");
    } else {
        activeMenuMobile.classList.add("d-none");
    }
}
function activeButtonClicked() {
    activeMenuMobile.classList.add("d-none");
}