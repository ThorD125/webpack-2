//importing librarys
import "./../library/importer.js"
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

//importing scss begin
import "./../scss/_main.scss"

//importing images
import "./../images/testimage.jpg"
import "./../images/dogggie.jpg"

//importing videos
import "./../videos/testvideo.mp4"

//importing audio
import "./../audio/testaudio.mp3"

//importing fonts
import "./../fonts/Alba.woff2"
import "./../fonts/Alba.woff"


//rest of the js has to go here
$(".slideshow").slick({
    infinite: true,
    // autoplay: true,
    dots: true,
    arrows: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
});

$(".fancybox").fancybox();