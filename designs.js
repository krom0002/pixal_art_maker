// declare variables
const canvas = $("#pixelCanvas");  
const input = $("#inputSubmit");
const reset = $("#resetCanvas");
const clear = $("#clearCanvas");
const size = $("#sizePicker");

// event listener for grid input
input.on("click",function(event){
    //prevents call to server refresh
    event.preventDefault();
    // declare variables
    const height = $("#inputHeight").val();
    const width = $("#inputWidth").val();
    
    // clear canvas
    canvas.empty();
    // call grid fuction
    makeGrid(height, width);
    // call color function
    color_picker();    
}) 

// event listener for reset grid button
reset.on("click",function(event) {
    
    // clear canvas
    canvas.empty();
    // attempting to clear form data, but it would not stick?
    size.value = "";
    height.value = "0";
    width.value = "0";
})

// event listener for color clear
clear.on("click",function(event) {
    
    // declare variables. tried without but it then does same as reset?
    const height = $("#inputHeight").val();
    const width = $("#inputWidth").val();
    
    //reset input
    input.empty();
    // rest canvas
    canvas.empty();
    //recreates grid with same size
    makeGrid(height, width);
    color_picker();
})

// function makes grid
function makeGrid(height, width) {    
    
    // loop 1 for height
    for (let row = 0; row < height; row++) {
        // declare variable
        const t_row = $("<tr></tr>");       
        // adds to grid
        canvas.append(t_row);
        
        // loop 2 for width
        for (let column = 0; column < width; column++) {
            // declare variables
            const t_column = $("<td></td>");
            const last_row = $("tr").last();
            // adds to grid   
            last_row.append(t_column);
        }
    }
}

// function for color picker
function color_picker() {    
    
    // loads color picker
    canvas.on("click", "td", function() {
        // declare variable  
        let color =   $("#colorPicker").val();
        // adds background color to cell
        $(this).css("background-color", color);
    });
}

