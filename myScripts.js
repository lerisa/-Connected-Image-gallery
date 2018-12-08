var slideIndex = 1; //start with index as 1
displayGallerySlides(slideIndex);

function nextGallerySlides(n) {
    displayGallerySlides(slideIndex += n);
}

function currentGallerySlide(n) {
    displayGallerySlides(slideIndex = n);
}

function displayGallerySlides(n) {
    var i;
    var slides = document.getElementsByClassName("gallerySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block"; //when intially loaded slides[0] (first image) will be displayed 

}