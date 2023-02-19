var x= 2; //defines the variable x//
x++; //increases x once//
var y= 3; //defines the vaibale y//
y--; //decreases y once//
document.write ("Let's take 2 and increase it once: " + x +
 ". Now lets decrease that once: "+ y + " Now heres a random number: "
  + (Math.random() *20)) //This increases 2 once and then decreases it once. Then it gives a random number between 1 and 20//


function addition_function() { //This function when called adds 2+2//
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2+2 =" + addition;
}

function subtraction_function() { //This function when called gives subtracts 2-2//
    var subtraction = 2-2;
    document.getElementById("Math2").innerHTML = "2-2 =" + subtraction;
}

function multiplication_function() { //This function when called multiplies 2*2//
    var multiplication = 2 * 2;
    document.getElementById("Math3").innerHTML = "2 x 2 =" + multiplication;
}

function division_function() { //This function when called divides 2/2 //
    var division = 2 / 2;
    document.getElementById("Math4").innerHTML = "2 / 2 =" + division;
}

function modulus_function() { //This function when called gives the remainder of 22/3//
    var remainder = 22 % 3;
    document.getElementById("Math5").innerHTML = "When you divide 22 by 3 you have a remainder of: " + remainder;
}

