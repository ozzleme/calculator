let display = document.getElementById("display");
let button = document.getElementById("button");

function calculate(num) {
    display.value+=num;
}

function getResult() {
    try {
        display.value=eval(display.value)
    }
    catch(err) {
        alert("Input a valid equation.")
    }
}

function clr() {
    display.value= " ";
}

function del() {
    display.value=display.value.slice(0, -1);
}