let player = "Y"

function makeMove(cell){
    if(player == "X") {
        cell.innerHTML ="Y";
        player = "Y";
    } else {
        cell.innerHTML ="X";
        player = "X";
    }
    checkWin();
}

function checkWin(){
    
    let winDiv = document.getElementById("win");

    if( document.getElementById("row1col1").innerText == document.getElementById("row1col2").innerText && 
        document.getElementById("row1col1").innerText == document.getElementById("row1col3").innerText && 
        document.getElementById("row1col1").innerText !=""){
       winDiv.innerHTML = "Win :)";
    }else if(document.getElementById("row2col1").innerText == document.getElementById("row2col2").innerText && document.getElementById("row2col1").innerText == document.getElementById("row2col3").innerText && document.getElementById("row2col1").innerText !=""){
        winDiv.innerHTML = "Win :)";
     }else if(document.getElementById("row3col1").innerText == document.getElementById("row3col2").innerText && document.getElementById("row3col1").innerText == document.getElementById("row3col3").innerText && document.getElementById("row3col1").innerText !=""){
        winDiv.innerHTML = "Win :)";
     }

}