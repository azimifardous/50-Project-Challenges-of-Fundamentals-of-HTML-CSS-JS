
function convert()   {
    let input = document.getElementById("number").value;
    let length = document.getElementById("length");
    let volume = document.getElementById("volume");
    let mass = document.getElementById("mass");
    length.textContent = input + " meter = " + 3.28084 * input + " Feet"
    volume.textContent = input + " Liter = " + 0.264172 * input + " Gallon"
    mass.textContent = input + " Mass = " + 2.20462 * input + " Pounds"
}


