function stringify(argA, argB, argC, argD)
{
    var str = argA + " " + argB + " " + argC + " " + argD + "<br>";
    return str;
}

function init()
{
    //Statements to be executed go here.
    document.getElementById("panel").innerHTML =
        stringify("JavaScript", "In", "Easy", "Steps");
    document.getElementById("panel").innerHTML +=
        stringify("Written", "By", "Mike", "McGrath");
}
document.addEventListener("DOMContentLoaded", init, false);
