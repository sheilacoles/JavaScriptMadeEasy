function init()
{
    var panel = document.getElementById("panel");
    var i;

    for (i = 1; i < 11; i++)
    {
        panel.innerHTML += "Iteration number: " + i + "<br>";
    }
}
document.addEventListener("DOMContentLoaded", init, false);