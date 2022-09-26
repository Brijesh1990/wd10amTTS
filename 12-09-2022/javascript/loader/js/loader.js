var myFunction;
function MainLoad()
{
    myFunction=setTimeout("MyLoader()",1000);
}

function MyLoader()
{
    document.getElementById("loader").style="display:none";
    document.getElementById("MymainPage").style="display:block";
}

var myFunction1;
function MainLoad1()
{
    myFunction1=setTimeout("MyLoader1()",1000);
}

function MyLoader1()
{
    document.getElementById("loader-page").style="display:none";
    document.getElementById("MymainPage").style="display:block";
}