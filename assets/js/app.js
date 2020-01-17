const button = document.getElementById("generate");
const display = document.getElementById("results");
const valueDisplay = document.getElementById("range-value");

// Criteria Elements
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const special = document.getElementById("special");
const slider = document.getElementById("slider");




// Function to change page value shown based on slider range
const rangeValue = function(){
    let newValue = slider.value;
    const target = document.getElementById("range-value");
    target.innerHTML = newValue;
  }
  
slider.addEventListener("input", rangeValue);

button.onclick = () => {
    console.log(lowercase.checked)
    console.log(uppercase.checked)
    console.log(numbers.checked)
    console.log(special.checked)
    console.log(slider.value)

};