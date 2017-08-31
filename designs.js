// Select color input
const colorPicker=document.getElementById("colorPicker");
// Select size input
const inputHeight=document.getElementById("input_height");
const inputWidth=document.getElementById("input_width");
// When size is submitted by the user, call makeGrid()
const sizePicker=document.getElementById("sizePicker");
sizePicker.onsubmit = function(event){
    event.preventDefault();
    makeGrid();
};

const pixelCanvas=document.getElementById("pixel_canvas");
function makeGrid() {
    pixelCanvas.innerHTML="";
    for(var i=0, lenrows=inputHeight.value; i<lenrows; i++){
        pixelCanvas.innerHTML+="<tr class=\"row\"></tr>";
        for(var j=0, lencols=inputWidth.value, row=document.getElementsByClassName("row"); j<lencols; j++){
            row[row.length-1].innerHTML+="<td onclick=\"toggleColor(this)\"></td>";
        }
    }
// Your code goes here!
}

function toggleColor(pixel){
    var initcolor=pixel.style.backgroundColor;
    pixel.style.background=colorPicker.value;
    if(pixel.style.backgroundColor===initcolor){
        pixel.style.background="#FFFFFF";
    }
}
