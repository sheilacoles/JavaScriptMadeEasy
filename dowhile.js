function init()
{
    var panel = document.getElementById("panel");
    var num = 2;

    do {
        num *= 2;
        panel.innerHTML += "Multipled value: " + num + "<br>";
    }
    while (num < 1000);
}
document.addEventListener("DOMContentLoaded", init, false);