//Get the button
var myButton = document.getElementById("myBtn");

//When the user scrolls down 30px from the top of the document body, show the button(none to block)
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

//When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
