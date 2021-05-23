var slideNumber = 1;
showSlide(slideNumber);
function slider(n) {
    showSlide(slideNumber += n);
}
function currentSlide(n) {
    showSlide(slideNumber = n);
}
function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow");
    var recipes = document.getElementsByClassName("recipe");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideNumber = 1}
    if (n < 1) {slideNumber = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
}
    for (i = 0; i < recipes.length; i++) {
        recipes[i].className = recipes[i].className.replace(" active", "");
}
    slides[slideNumber-1].style.display = "block";
    recipes[slideNumber-1].className += " active";
    captionText.innerHTML = recipes[slideNumber-1].alt;
}