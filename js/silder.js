const $ = document;
const sliderContainer = $.getElementById("slider");
let sliderImage = $.querySelector(".slider-image");
const srcImagesSlider = [
    "./src/images/slider-1.jpg",
    "./src/images/slider-2.jpg",
    "./src/images/slider-3.jpg",
    "./src/images/slider-4.jpg",
    "./src/images/slider-5.jpg",
    "./src/images/slider-6.jpg",
    "./src/images/slider-7.jpg",
    "./src/images/slider-8.jpg",
    "./src/images/slider-9.jpg",
    "./src/images/slider-10.jpg",
];
let counter = 0;
window.addEventListener("load", ()=>{

    setInterval(()=>{
      
        if(counter < srcImagesSlider.length){
            
            sliderImage.setAttribute("src",srcImagesSlider[counter]);

            counter++;
       
        }else if(counter === srcImagesSlider.length){
            counter = 0;
        }

    },5000)
})
