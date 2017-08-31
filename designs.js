// color input
const colorPicker=document.getElementById("colorPicker");
// size input
const inputHeight=document.getElementById("input_height");
const inputWidth=document.getElementById("input_width");
// On submit by the user, prevents form submit and calls makeGrid()
const sizePicker=document.getElementById("sizePicker");
sizePicker.onsubmit = function(event){
    event.preventDefault();
    makeGrid();
};
// Reference to Canvas
const pixelCanvas=document.getElementById("pixel_canvas");
//makeGrid is the function used to construct the Canvas as Pixels
function makeGrid() {
    //clears the contents of Canvas to start the construction
    pixelCanvas.innerHTML="";
    //Looping mechanism to construct each pixel as an element
    for(var i=0, lenrows=inputHeight.value; i<lenrows; i++){
        //creating a row element
        pixelCanvas.innerHTML+="<tr class=\"row\"></tr>";
        for(var j=0, lencols=inputWidth.value, row=document.getElementsByClassName("row"); j<lencols; j++){
            //creating column with onclick attribute that triggers toggleColor function to paint that pixel
            row[row.length-1].innerHTML+="<td onclick=\"toggleColor(this)\"></td>";
        }
    }
}
//toggleColor function paints the pixel that is clicked
function toggleColor(pixel){
    //initial color of the pixel is saved
    var initcolor=pixel.style.backgroundColor;
    //pixel painted with chosen color
    pixel.style.background=colorPicker.value;
    //if the initial color of the pixel and the painted color is same, the background color is set to white.(kind of an erase functionality to the pixel)
    if(pixel.style.backgroundColor===initcolor){
        pixel.style.background="#FFFFFF";
    }
}
