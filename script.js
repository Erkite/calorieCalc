//document.getElementById("submit").onclick =
let total = 0;

function calc()
{
        let name = document.getElementById("name");
        let logType = document.getElementById("logType");
        let calories = document.getElementById("calories");
        let name1 = name.value;
        let logType1 = logType.value;
        let calories1 = calories.value;

        let template1 = document.querySelector(".template");

        let newLog = template1.cloneNode(true);
        newLog.querySelector(".name").innerText = name1;
        newLog.querySelector(".logType").innerText = logType1;
        newLog.querySelector(".calories").innerText = calories1;

        newLog.classList.remove("template");
        newLog.classList.add("logs");

        document.body.appendChild(newLog);

        let sum = document.querySelector(".totalCalories");
        let userInput = parseFloat(calories1);

        if(logType1 === "Food")
        {
                total += userInput;
        }
        if(logType1 === "Activity")
        {
                total -= userInput;
        }
sum.textContent = total;
}
submit = document.getElementById("submit");
submit.addEventListener("click",calc)