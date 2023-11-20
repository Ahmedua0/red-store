// start red store page
let icon = document.querySelector(".menu-icon");
let menuitems = document.querySelector("#menuitems");
menuitems.style.maxHeight = "0px";
icon.onclick = function(){
    if(menuitems.style.maxHeight == "0px"){
        menuitems.style.maxHeight = "200px"
    }else{
        menuitems.style.maxHeight = "0px"
    }
}
// end red store page
// start all details products page
let smallimg = document.getElementsByClassName("smallimg");
let productimg = document.getElementById("productimg");
Array.prototype.forEach.call(smallimg, function(image) {
    image.onclick = function(){
        productimg.src = image.src;
        }
});

let imgs = [
    "images/3.png",
    "images/pngwing.com(1).png",
    "images/Tennis.png",
]
// let photo = document.querySelector(".change-photo");
// let i = 0;
// function change() {
//     photo.src = imgs[i];
//     if (i == 1) {
//     i = 0;
//     } else {
//     i++;
//     }
// }
// setInterval(change, 1000);
// smallimg[0].onclick = function(){
// productimg.src = smallimg[0].src;
// }
// smallimg[1].onclick = function(){
// productimg.src = smallimg[1].src;
// }
// smallimg[2].onclick = function(){
// productimg.src = smallimg[2].src;
// }
// smallimg[3].onclick = function(){
// productimg.src = smallimg[3].src;
// }
// var images_url = [];
// Array.prototype.forEach.call(smallimg, function(image_tag){
//     images_url.push(image_tag.src)
// });
// let next = document.getElementById('next');
// let prev = document.getElementById("prev");


// next.addEventListener('click', function(){;
//     active_image = productimg.src;
//     index = images_url.indexOf(active_image);
//     new_index = index + 1;
//     if(index == images_url.length - 1){
//         new_index = 0;
//     }
//     productimg.src = images_url[new_index];
//     active_image = productimg.src;
// });
// prev.addEventListener('click', function(){
//     active_image = productimg.src;
//     index = images_url.indexOf(active_image);
//     new_index = index - 1;
//     if (index == 0){
//         new_index = images_url.length - 1;
//     }
//     productimg.src = images_url[new_index];
//     active_image = productimg.src;
// });
// sign.onclick = function(){
//     productimg.src = smallimg[1].src;
// sign.onclick = function(){
//     productimg.src = smallimg[2].src;
//     sign.onclick = function(){
//         productimg.src = smallimg[3].src;
//     }
// }
// }



// end all  detalis products page

// start cart page
let numbers = document.querySelectorAll(".number");
let costs = document.querySelectorAll(".cost");
let fix = 50;

numbers.forEach((number, numberindex)=>{
    number.addEventListener("change", ()=>{
        costs[numberindex].innerText = `$${fix * number.value}`;
    })
})


// end cart page


// start account page
let loginForm = document.getElementById("loginForm");
let RegForm = document.getElementById("RegForm");
let Indicator = document.getElementById("Indicator");
let log = document.getElementById("log");
let reg = document.getElementById("reg");
reg.onclick = function(){
RegForm.style.transform = "translateX(0px)";
loginForm.style.transform = "translateX(0px)";
Indicator.style.transform = "translateX(100px)";
}
log.onclick = function(){
    RegForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}

// end account page