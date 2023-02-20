function Vote_Function() { //This function when called lets someone know if theyre old enough to vote.//
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not old enough":"You can";
    document.getElementById("Vote").innerHTML = Can_Vote + " vote!";
}

function Dog(Breed, Color, Age) { //This function is an object constructor//
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Age = Age;
}
var Juno = new Dog("German Shepard", "Brown", 6); //The new keyword is creating objects of the dog function//
var Sterling = new Dog("Pitbull", "Grey", 2);
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Juno is a " + Juno.Dog_Age + " year old " + Juno.Dog_Breed; // When the button is clicked it will show the age and breed of one dog//
}

function Nested_Function() { //This is a nested function that when clicked counts by adding 1 to starting point//
    document.getElementById("Counting").innerHTML = count();
    function count() {
        var Starting_point = 0;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}