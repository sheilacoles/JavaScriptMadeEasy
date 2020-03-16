function init()
{
    document.getElementById("panel").innerHTML =
        "Hello from an External Javascript File!";
    window.alert("Document Loaded!");
}
window.onload = init;