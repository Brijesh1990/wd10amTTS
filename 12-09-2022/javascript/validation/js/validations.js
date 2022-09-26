function valid()
{
    if(document.frm.email.value=="")
    {
        // alert('Please enter a email Address')
        document.getElementById("error").innerHTML="Please eneter your email address";
        document.frm.email.focus();
        return false;
    }

    var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!e.test(document.frm.email.value))
    {
        alert('Please enter a valid email Address')
        document.frm.email.focus();
        return false;
    }

    if(document.frm.fname.value=="")
    {
        alert('Please enter your FirstName')
        document.frm.fname.focus();
        return false;
    }
    var f=/^[A-Za-z]+$/;
    if(!f.test(document.frm.fname.value))
    {
        alert('Please enter your firstname alphbetic character only')
        document.frm.fname.focus();
        return false;
    }

    if(document.frm.lname.value=="")
    {
        alert('Please enter your LastName')
        document.frm.lname.focus();
        return false;
    }
    var l=/^[A-Za-z]+$/;
    if(!l.test(document.frm.lname.value))
    {
        alert('Please enter your lastname alphbetic character only')
        document.frm.lname.focus();
        return false;
    }



}