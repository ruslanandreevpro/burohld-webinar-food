// Get the modal
var errorModal = document.getElementById("errorModal");

// Get the button that opens the modal
// var btn = document.getElementById("btn_email");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("errorModalClose")[0];

// When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     errorModal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    errorModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == errorModal) {
        errorModal.style.display = "none";
    }
}