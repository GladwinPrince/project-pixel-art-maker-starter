// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event){
    event.preventDefault();
    makeGrid();
});
function makeGrid() {
    //alert($("#colorPicker").val()+"-"+$("#input_height").val()+"-"+$("#input_width").val());
    $("#pixel_canvas").empty();
    for(var i=0, lenrows=$("#input_height").val(); i<lenrows; i++){
        $("#pixel_canvas").append("<tr class=\"row\"></tr>");
        for(var j=0, lencols=$("#input_width").val(); j<lencols; j++){
            $(".row").last().append("<td onclick=\"toggleColor(this)\"></td>");
        }
    }
// Your code goes here!
}

function toggleColor(pixel){
    var initcolor=pixel.style.backgroundColor;
    pixel.style.background=$("#colorPicker").val();
    if(pixel.style.backgroundColor===initcolor){
        pixel.style.background="#FFFFFF";
    }
}
