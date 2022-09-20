function clr()
{
    document.getElementById("result").value="";
}
function displ(val)
{
    document.getElementById("result").value+=val;
}
function displ1(val1)
{
    document.getElementById("result").value+=val1;
}


function finalresult()
{
    // a=10;
    // b=20;
   let a=document.getElementById("result").value;
   let b=eval(a);
   document.getElementById("result").value=b;
}