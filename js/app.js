// mobile menu 
let openMenu = document.querySelector(".mobile-nav");
let closeMenu = document.querySelector(".close-menu");
let mobileMenu = document.querySelector(".menu");

openMenu.addEventListener("click", ()=> {
    mobileMenu.classList.add("active");
});
closeMenu.addEventListener("click", ()=> {
    mobileMenu.classList.remove("active");
});

// links update 

let mostPopular = document.querySelectorAll(".most-popularbox a");
mostPopular.forEach(link=> {
    link.href= "https://www.facebook.com/share/174SvrHWoJ/?mibextid=wwXIfr";
    link.setAttribute("target","_blank");
});

let recomendedGameLink = document.querySelectorAll(".game-recomendation-box a");
recomendedGameLink.forEach(link=> {
    link.href="https://www.facebook.com/share/174SvrHWoJ/?mibextid=wwXIfr";
    link.setAttribute("target","_blank");
});

let mostPlayed = document.querySelectorAll(".most-played-games a");
mostPlayed.forEach(link=> {
    link.href="http://play.firekirin.in/web_mobile/firekirin_pc/";
    link.setAttribute("target","_blank");
});


let getStarted = document.querySelectorAll(".exp-main a");
getStarted.forEach(link=> {
    link.href="https://www.facebook.com/share/174SvrHWoJ/?mibextid=wwXIfr";
    link.setAttribute("target","_blank");
});



let faqBtn = document.querySelectorAll(".faq-que ul li");
let faqAns = document.querySelectorAll(".faq-ans");

faqBtn.forEach((btn, index)=> {
    btn.addEventListener("click", function(){
        faqBtn.forEach(li=> {
            li.classList.remove("active");
        });
        btn.classList.add("active");
        faqAns.forEach(an=> {
            an.classList.remove("active");
        });
        faqAns[index].classList.add("active");
    });
});


// main games filter 
let mainFilterBtn = document.querySelectorAll(".games-main-filter ul li");
let mainFilterImg = document.querySelectorAll(".games-filter-box");

mainFilterBtn.forEach((btn, index)=> {
    btn.addEventListener("click", function(){
        mainFilterBtn.forEach(btn=> {
            btn.classList.remove("active");
        });
        btn.classList.add("active");
        mainFilterImg.forEach(box=> {
            box.classList.remove("active");
        });
        mainFilterImg[index].classList.add("active");
    });
});




let copyText = document.querySelectorAll('.copy1');
copyText.forEach(copy=> {
    copy.innerHTML = `<p>http://play.firekirin.in all rights reseverd</p>`;
});




// mobile faqs
let mobileFaqList = document.querySelectorAll(".mobile-faq li");
let mobileFaqAns = document.querySelectorAll(".mobile-faq-ans");

mobileFaqList.forEach((list, index)=> {
    list.addEventListener("click", ()=> {
        mobileFaqList.forEach(li=> {
            li.classList.remove("active");
        });
        list.classList.add("active");
        mobileFaqAns.forEach(ans=> {
            ans.classList.remove("active");
        });
        mobileFaqAns[index].classList.add("active");
    });
});



// all games create boxes 
let allGames = document.querySelector(".first-game-box .games-filter-box-img");

// Array of actual image names from the all folder
const allGameImages = [
    "Super-Vault.png", "Mask-Group-318.png", "Mask-Group-281.png", "Mask-Group-294.png", "Mask-Group-286.png",
    "Mask-Group-194.png", "HappyDucky.png", "Group-168@2x.png", "Mask-Group-289.png", "Mask-Group-320.png",
    "Mask-Group-304.png", "Wildbull.png", "Mask-Group-205.png", "Princess_life-2.png", "Yuncan.png",
    "Mask-Group-276.png", "Mask-Group-307.png", "Group-229@2x.png", "Mask-Group-278.png", "Mask-Group-186@2x.png",
    "Mask-Group-315.png", "Mask-Group-270.png", "Mask-Group-303-2.png", "Mask-Group-310.png", "Mask-Group-312.png",
    "Mask-Group-297.png", "Mask-Group-321.png", "Mask-Group-290.png", "Mask-Group-305.png", "Mask-Group-211.png",
    "Mask-Group-241.png", "Group-5@2x.png", "Mask-Group-37@2x.png", "Mask-Group-314.png", "Mask-Group-196.png",
    "Mask-Group-317.png", "Mask-Group-277.png", "Mask-Group-36@2x.png", "Mask-Group-209.png", "Mask-Group-185.png",
    "Mask-Group-207.png", "Mask-Group-283.png", "Book-Of-Wizard.jpg", "Mask-Group-296.png", "Mask-Group-308.png",
    "Mask-Group-279.png", "Mask-Group-199.png", "Mask-Group-54@2x-300x300.png", "Mask-Group-193.png", "Mask-Group-202.png",
    "Joker777.png", "Mask-Group-288.png", "Mask-Group-201.png", "Mask-Group-212.png", "Mask-Group-210.png",
    "Group-228@2x.png", "Mask-Group-292.png", "Fortune-Piggy.png", "Mask-Group-183@2x.png", "Mask-Group-323.png",
    "Age_clopara.png", "Mask-Group-184@2x.png", "Mask-Group-272.png", "Mask-Group-306.png", "Mask-Group-324-1.jpg",
    "Mask-Group-274.png", "Mask-Group-271.png", "Mask-Group-203.png", "Mask-Group-190.png", "Mask-Group-313.png",
    "Mask-Group-204.png", "Mask-Group-273.png", "Mask-Group-322.png", "Group-241.png", "Mask-Group-282.png",
    "Mask-Group-291.png", "Santas-Riches.png", "Mask-Group-192.png", "Mask-Group-309.png", "Mask-Group-316.png",
    "Mask-Group-275.png", "Mask-Group-191.png", "Group-208@2x.png", "Mask-Group-299.png", "Group-240.png",
    "Mask-Group-200.png", "Mask-Group-197.png", "Mask-Group-198.png", "Mask-Group-293.png", "Mask-Group-319.png",
    "Mask-Group-285.png", "Mask-Group-280.png", "Mask-Group-284.png", "Mask-Group-298.png", "Mask-Group-208.png",
    "Mask-Group-287.png", "Mask-Group-295.png", "Chili_taco.png", "Double_weels.png", "Mask-Group-35@2x.png"
];

allGameImages.forEach((imageName, index) => {
    if (index < 90) { // Limit to 90 games
        let createDiv = document.createElement("div");
        createDiv.classList.add("game-box");
        let createImg = document.createElement("img");
        createImg.src= `./media/games/all/${imageName}`;
        createImg.onerror = function() {
            // Hide broken images
            this.style.display = 'none';
        };
        createDiv.appendChild(createImg);
        allGames.appendChild(createDiv);
    }
});


// popular games 

let popularGames = document.querySelector(".second-game-box .games-filter-box-img");

// Array of actual image names from the popular folder
const popularGameImages = [
    "Super-Vault.png", "Mask-Group-318.png", "Mask-Group-194.png", "Mask-Group-289.png", "Mask-Group-276.png",
    "Mask-Group-315.png", "Mask-Group-303-2.png", "Mask-Group-310.png", "Mask-Group-312.png", "Mask-Group-185.png",
    "Mask-Group-308.png", "Mask-Group-279.png", "Group-228@2x.png", "Fortune-Piggy.png", "Mask-Group-306.png",
    "Mask-Group-324-1.jpg", "Mask-Group-271.png", "Group-241.png", "Mask-Group-291.png", "Mask-Group-275.png",
    "Group-208@2x.png", "Group-240.png", "Mask-Group-198.png", "Mask-Group-319.png"
];

popularGameImages.forEach((imageName) => {
    let createDiv = document.createElement("div");
    createDiv.classList.add("game-box");
    let createImg = document.createElement("img");
    createImg.src= `./media/games/popular/${imageName}`;
    createImg.onerror = function() {
        // Hide broken images
        this.style.display = 'none';
    };
    createDiv.appendChild(createImg);
    popularGames.appendChild(createDiv);
});


// new games 

let newGames = document.querySelector(".third-game-box .games-filter-box-img");

// Array of actual image names from the new folder
const newGameImages = [
    "Group-168@2x.png", "Mask-Group-320.png", "Wildbull.png", "Mask-Group-305.png", "Mask-Group-211.png",
    "Mask-Group-241.png", "Mask-Group-196.png", "Mask-Group-36@2x.png", "Mask-Group-54@2x-300x300.png", "Mask-Group-193.png",
    "Joker777.png", "Mask-Group-274.png", "Mask-Group-282.png", "Mask-Group-291.png", "Mask-Group-299.png",
    "Mask-Group-293.png", "Mask-Group-287.png", "Double_weels.png", "Golden_Poker.png", "Mask-Group-302.png"
];

newGameImages.forEach((imageName) => {
    let createDiv = document.createElement("div");
    createDiv.classList.add("game-box");
    let createImg = document.createElement("img");
    createImg.src= `./media/games/new/${imageName}`;
    createImg.onerror = function() {
        // Hide broken images
        this.style.display = 'none';
    };
    createDiv.appendChild(createImg);
    newGames.appendChild(createDiv);
});

// coming soon games 

let comingGames = document.querySelector(".four-game-box .games-filter-box-img");

// Array of actual image names from the coming-soon folder
const comingSoonGameImages = [
    "Book-Of-Wizard.jpg", "Age_clopara.png", "Chili_taco.png"
];

comingSoonGameImages.forEach((imageName) => {
    let createDiv = document.createElement("div");
    createDiv.classList.add("game-box");
    let createImg = document.createElement("img");
    createImg.src= `./media/games/coming-soon/${imageName}`;
    createImg.onerror = function() {
        // Hide broken images
        this.style.display = 'none';
    };
    createDiv.appendChild(createImg);
    comingGames.appendChild(createDiv);
});





let gamebox = document.querySelectorAll(".game-box");
let gameboxImg = document.querySelectorAll(".game-box img");
gamebox.forEach(img=> {
    let createLink = document.createElement("a");
    createLink.setAttribute("href", "https://www.facebook.com/share/174SvrHWoJ/?mibextid=wwXIfr");
     createLink.setAttribute("target", "_blank");
    img.appendChild(createLink);
});




