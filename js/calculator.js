var output = document.getElementById("output");

//Math Functions

function multiply(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}


document.getElementById("addBtn").addEventListener("click", function(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  output.innerHTML = add(num1, num2);
});

document.getElementById("subtractBtn").addEventListener("click", function(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  output.innerHTML = subtract(num1, num2);
});

document.getElementById("multiplyBtn").addEventListener("click", function(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  output.innerHTML = multiply(num1, num2);
});

document.getElementById("divideBtn").addEventListener("click", function(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  output.innerHTML = divide(num1, num2);
});

