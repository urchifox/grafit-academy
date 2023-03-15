let mainImage = document.querySelector(".slider__main-img");
let desc = document.querySelector(".slider__desc");
let prewiews = document.querySelectorAll(".slider__prewiew-link");

for (let prewiew of prewiews) {
    prewiew.onclick = function (evt) {
        evt.preventDefault();
        
        let currentActiveImg = document.querySelector(".slider__prewiew-link_active");
        mainImage.src = prewiew.href;
        
        currentActiveImg.classList.remove("slider__prewiew-link_active");
        prewiew.classList.add("slider__prewiew-link_active");

        desc.textContent = prewiew.getAttribute("data-desc");
    }
}

let leftArrow = document.querySelector(".arrow-left");
let rightArrow = document.querySelector(".arrow-right");

// rightArrow.onclick = function () { 
//     for (let i = 0; i < prewiews.length; i++) {
//         console.log(prewiews[i] === currentActiveImg);
//         console.log(prewiews[i]);

//         // if (prewiews[i] == currentActiveImg) {
//         //     console.log(prewiews[i]);
//         //     // mainImage.src = prewiews[i+1].href;
//         // }
//     }
// }
