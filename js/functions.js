
var counter = 0;

function cellClick (cell) 
    {
        if(window.getComputedStyle(cell).backgroundImage == "none" )
        {

        if (counter < 8) 
            {
                cell.style = `background-image: url(img/queen.png); 
                background-size: cover;`;
                blockCells(cell);
                counter++;
            }else{
                alert("Las 8 reinas ya han sido colocadas");
            }
    }else{
        cell.style = "background-image: none;";
        unblockCells(cell);
        counter--;
    }
}

function cambiarColor (r, c)
    {
        var cell = document.getElementById("Tablero");
        var r1 = r, c1 = c, r2 = r, c2 = c;
        var r3 = r, c3 = c, r4 = r, c4 = c;

        for (let i = 0; i < 8; i++)
        {
            cell.rows[r].cells[i].style.backgroundColor = "lightblue";
            cell.rows[i].cells[c].style.backgroundColor = "lightblue";
            if (r1 < 8 && c1 < 8) {
                cell.rows[r1++].cells[c1++].style.backgroundColor = "lightblue";
            }
            if (r2 >= 0 && c2 >= 0) {
                cell.rows[r2--].cells[c2--].style.backgroundColor = "lightblue";
            }
            if (r3 < 8 && c3 >= 0) {
                cell.rows[r3++].cells[c3--].style.backgroundColor = "lightblue";
            }
            if (r4 >= 0 && c4 < 8) {
                cell.rows[r4--].cells[c4++].style.backgroundColor = "lightblue";
            }
        }
    }

function clearColor ()
{
    var cell = document.getElementsByTagName("td");
    for (let i = 0; i < cell.length; i++)
    {
        cell[i].style.backgroundColor = "";
    }
}

function blockCells (cell)
{
    const row = cell.parentNode.rowIndex;
    const col = cell.cellIndex;
    var board = document.getElementById("Tablero");

    for (let i = 0; i < 8; i++) {
        if (i !== col) {
            board.rows[row].cells[i].onclick = null;
        }
        if (i !== row) {
            board.rows[i].cells[col].onclick = null;
        }
    }
    for (let i = -7; i <= 7; i++) {
        if (row + i >= 0 && row + i < 8 && col + i >= 0 && col + i < 8 && i !== 0) {
            board.rows[row + i].cells[col + i].onclick = null;
        }
        if (row + i >= 0 && row + i < 8 && col - i >= 0 && col - i < 8 && i !== 0) {
            board.rows[row + i].cells[col - i].onclick = null;
        }
    }
}

function unblockCells (cell) {
    const row = cell.parentNode.rowIndex;
    const col = cell.cellIndex;
    var board = document.getElementById("Tablero");
    for (let i = 0; i < 8; i++) {
        board.rows[row].cells[i].onclick = function() {
            cellClick(this);
        };
        board.rows[i].cells[col].onclick = function() {
            cellClick(this);
        };
    }
    for (let i = -7; i <= 7; i++) {
        if (row + i >= 0 && row + i < 8 && col + i >= 0 && col + i < 8 && i !== 0) {
            board.rows[row + i].cells[col + i].onclick = function() {
                cellClick(this);
            };
        }
        if (row + i >= 0 && row + i < 8 && col - i >= 0 && col - i < 8 && i !== 0) {
            board.rows[row + i].cells[col - i].onclick = function() {
                cellClick(this);
            };
        }
    }
}