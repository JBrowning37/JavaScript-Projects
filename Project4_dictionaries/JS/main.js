function shark_dictionary() {
    var shark = {
        type: "great white",
        color:"grey",
        length:"15 feet",
        weight:"1800 lbs",
        age:50
    };
    delete shark.weight;
    document.getElementById("dictionary").innerHTML = shark.weight;
}