
var counter = 0;
function cellClick(cell) 
{
    if(window.getComputedStyle(cell).backgroundImage=="none")
    {
        if (counter<8)
        {
            cell.style=`background-image:url(./img/queen.png); 
                        background-size:cover;`;
            counter++;
        }
        else
        {
            alert("Las Ocho reinas han sido colocadas.");        
        }    
    }
    else
    {
        cell.style="background-image:none;";
        counter--;
    }
}