/*********************  result box  ********************/
let resultbox = document.getElementById("result-box");

/*************** calculator ***************/
let btns = document.querySelectorAll(".btn");
let showContent = document.getElementById("showContent");

let expression = "";

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        expression += btn.innerText;
        const digit = btn.innerText;
        if (showContent.innerText.length < 16) {
            showContent.innerText += digit;
        } else if (navigator.vibrate) {
            navigator.vibrate(100);    
        }
    })
})


/*****************  btn equal   ****************/
let btnEqual = document.getElementById("btnEqual");

btnEqual.addEventListener("click", () => {
    let result = eval(expression);
    result = parseFloat(result.toFixed(2)); 
    resultbox.innerText = result;
})


/***************** content clear   *************/
let contentClear = document.getElementById("contentClear");

contentClear.addEventListener("click", () => {
    showContent.innerText = "";
    resultbox.innerText = "";
    expression = "";
})


/*****************  all clear *****************/
let allClear = document.getElementById("allClear");

allClear.addEventListener("click", () => {
    location.reload();
})



/********************* theme *******************/
let mode = document.getElementById("mode");

let container = document.getElementById("container");


mode.addEventListener("click", () => {
    if (container.classList.contains("light")) {
        container.classList.remove("light");
        container.classList.add("other");
        container.style.backgroundColor = "white";  
        mode.classList.remove("fa-sun");
        mode.classList.add("fa-moon");
    } else {
        container.classList.remove("other");
        container.classList.add("light"); 
        container.style.backgroundColor = "bisque"; 
        mode.classList.remove("fa-moon");
        mode.classList.add("fa-sun"); 
    }
});


