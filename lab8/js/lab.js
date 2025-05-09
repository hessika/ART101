let aColors=["purple", "blue", "pink", "red"];

function fDoColors(color) {

    $("output").css("background",color);

}

//DoColors("purple");

aColors.map(fDoColors);

setTimeout(fDoColors("green"), 2000)