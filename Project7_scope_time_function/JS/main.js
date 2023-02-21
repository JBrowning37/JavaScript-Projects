var X = 10;
function Add_1() {
    document.write(20 + X + "<br>");
}
function Add_2() {
    document.write(X + 100);
}
Add_1();
Add_2();

function Add_Numbers() {
    var X = 10;
    document.write("<br>" + (20 + X) + "<br>");
}
function Ad_Numbers_2() {
    console.log(X + 100);
}
Add_Numbers();
Add_Numbers_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is afternoon.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}