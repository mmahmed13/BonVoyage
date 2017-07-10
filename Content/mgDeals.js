
function dealClick ()
{
    var country = document.forms["dealForm"]["country"].value;
    var name = document.forms["dealForm"]["name"].value;
    var image = document.forms["dealForm"]["image"].value;
    var duration = document.forms["dealForm"]["duration"].value;
    var stay = document.forms["dealForm"]["stay"].value;
    var visit1 = document.forms["dealForm"]["visit1"].value;
    var visit2 = document.forms["dealForm"]["visit2"].value;
    var lunch = document.forms["dealForm"]["lunch"].value;
    var dinner = document.forms["dealForm"]["dinner"].value;
    var price = document.forms["dealForm"]["price"].value;
    image = image.replace(/^C:\\fakepath\\/, "")
    
    if (country.length==0 && name.length==0 && image.length==0 && duration.length==0 && stay.length==0 && visit1.length==0 && visit2.length==0 && dinner.length==0 && lunch.length==0 && price.length==0)
    {
        alert ("Fill each field!");
        return;
    }
    var http = new XMLHttpRequest();
    var url = "servlet4";
    var params = "country="+country + "&name="+name + "&image="+image + "&duration="+duration + "&stay="+stay + "&visit1="+visit1 + "&visit2="+visit2 + "&dinner="+dinner + "&lunch="+lunch + "&price="+price;
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(params);		
    http.onreadystatechange = function()
    {
        if(http.readyState == 4)
        {
           alert ("Deal Added!");
        }
    }
}