function full_Sentence() {
    var part1 = "This sentence ";
    var part2 = "has been ";
    var part3 = "concatenated.";
    var whole_sentence = part1.concat(part2, part3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "none of this will show bannana or this haha.";
    var Section = Sentence.slice(23,31);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X =182;
    document.getElementById("Number_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.301293847362812;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}