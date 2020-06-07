
var sqaures = document.querySelectorAll("td");

function change()
{
    if(this.textContent = " ")
    {
        this.textContent = "X";
    }
}

for(var i =0;i<sqaures.length;i++)
{
    sqaures[i].addEventListener("click",change);
}



 var header= document.querySelector("h1");

function getColor()
{
    var letters = "0123456789ABCDEF";
    var color = '#';

    for(var i =0;i<6;i++)
    {
        color += letters[Math.floor(Math.random()*16)];
    }

    return color
}

function headerColor()
{
    colorin = this.getColor()
   
        header.style.color = colorin;
    
  
}

setInterval("headerColor()",500)