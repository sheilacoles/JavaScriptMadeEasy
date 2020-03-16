function init()
{
    var sum = 80 + 20;  //Add two operands.
    var sub = sum - 50; //Subtract 2nd operand from 1st.
    var mul = sum * 50; //Multiply two operands.
    var div = sum / 4;  //Divide 1st operand by 2nd.
    var mod = sum % 2;  //Remainder after dividing by 2.

    var str = "Sum:" + sum + "<br>Subtraction: " + sub;
    str += "<br>Multiplication: " + mul;
    str += "<br>Division: " + div + "<br>Modulus: " + mod;

    var inc = ++sum;    //Immediately increment by one.
    str += "<br>Increment: " + inc;


    --sum;    //Immediately decrement by one. 
    str += "<br>Decrement: " + sum;

    document.getElementById("panel").innerHTML = str;
}
document.addEventListener("DOMContentLoaded", init, false);

