let displayAnswer = document.querySelector(".displayAns")
let displayInput = document.querySelector(".displayInput")
let btns = document.querySelectorAll("button")
let clear = document.querySelector("#ac")
let erase = document.querySelector("#erase")
let sum = document.querySelector("#sum")

let realTimeDisplay = []

clear.addEventListener("click", () =>{

    realTimeDisplay = [""]
    displayAnswer.innerHTML = 0;
    displayInput.className = "displayInput";
    displayAnswer.className = "displayAnswer";

})

btns.forEach((button) => {
    button.addEventListener("click", () =>{

          if(!button.id.match("erase")) {
              realTimeDisplay.push(button.value)
              displayInput.innerHTML = realTimeDisplay.join("");

              if(button.classList.contains("number_btn")) {
                  displayAnswer.innerHTML = eval(realTimeDisplay.join(""));
              }
            }

          if(button.id.match("erase")) {
              realTimeDisplay.pop();
              displayInput.innerHTML = realTimeDisplay.join("") 
              displayAnswer.innerHTML = eval(realTimeDisplay.join(""));
            }

          if(button.id.match("sum")) {
              displayInput.className = "displayAnswer";
              displayAnswer.className = "displayInput";

          }

          if(typeof eval(realTimeDisplay.join("")) == "undefined") {
              displayAnswer.innerHTML = 0
          }

          

    });
});
