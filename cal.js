function enterNum(val) {
    let display = document.getElementById('display');
    display.value += val;
}

function clearDisplay(){
    document.getElementById('display').value = "";
}

function remove() {
    let display = document.getElementById('display');

    let v = display.value.substring(0, display.value.length - 1);
    display.value = v;
}

function calculateResult(){
    let display = document.getElementById('display');
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}
