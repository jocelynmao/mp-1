function doAdd() {
    let num1=Number(document.getElementById("firstNum").value);
    let num2=Number(document.getElementById("secondNum").value);
    let result = num1 + num2;
    negResult(result);
}

function doSubtract() {
    let num1=document.getElementById("firstNum").value;
    let num2=document.getElementById("secondNum").value;
    let result = num1 - num2;
    negResult(result);
}

function doMultiply() {
    let num1=document.getElementById("firstNum").value;
    let num2=document.getElementById("secondNum").value;
    let result = num1 * num2;
    negResult(result);
}

function doDivide() {
    let num1=document.getElementById("firstNum").value;
    let num2=document.getElementById("secondNum").value;
    let result = num1 / num2;
    negResult(result);
}

function doPower() {
    let num1=document.getElementById("firstNum").value;
    let num2=document.getElementById("secondNum").value;
    let total = 1;

    if (num2 > 0) {
        for (let i = 0; i < num2; i++) {
            total *= num1;
        }
    } else {
        for (let i = 0; i < -num2; i++) {
            total *= num1;
        }
        total = 1 / total;
    }
    negResult(total);
}

function negResult(result) {
    let output=document.getElementById("output");
    output.innerHTML=String(result);
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function doClear() {
    document.getElementById("firstNum").value = "";
    document.getElementById("secondNum").value = "";
    document.getElementById("output").innerHTML = "";
}