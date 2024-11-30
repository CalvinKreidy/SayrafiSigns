let image = document.getElementById('CarouselImage'); 
let button1 = document.getElementById("OrientedListElement1");
button1.addEventListener('click', function() {
    
    image.src = "./Assets/FilmCenter.jpg";
    image.style.animation = "none";
    image.offsetWidth;
    image.style.animation = 'fadeIn 0.3s ease-in forwards, moveRight 0.3s ease-in-out forwards';
});

let button2 = document.getElementById("OrientedListElement2");
button2.addEventListener('click', function() {
    
    image.src = './Assets/ededed.png';
    image.style.animation = "none";
    image.offsetHeight;
    image.style.animation = 'fadeIn 0.3s ease-in forwards, moveRight 0.3s ease-in-out forwards';
});

