
/**
 * Set the width if the side navigation to 250px
 */
function openNav(){
    document.getElementById('drawer').style.width = "100vw";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/**
 * Set the width of the side navigation to 0
 */
function closeNav(){
    document.getElementById('drawer').style.width = "0";
}




/**         
 * 
 * SLIDER
 * 
 */



 var slideIndex = 1;
 showSlides(slideIndex);

 // Next/previous controls
 function goSlide(n){
    showSlides(slideIndex += n);
 }

 //Thumbnail image controls
 function currentSlide(n){
     showSlides(slideIndex = n);
 }

 function showSlides(n){
    var i;
    var slides = document.getElementById('slides');
    var dots = document.getElementById('dot');
    if( n > slides.length ) { slideIndex = 1 }
    if(n < 1) {slideIndex = slides.length}
    for (i = 0; index < slides.length; i++) {
        slides[i].style.display = "none";
        
    }

    for ( i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
 }