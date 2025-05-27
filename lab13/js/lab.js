let oneLongString = "";

for (let i = 1; i <= 200; i++) {
    let output = "";

    if (i % 3 === 0) output += "bleh bleh bleh";
    if (i % 5 === 0) output += "blu blu blu";
    if (i % 15 === 0) output += "BOINK";

    console.log(output || i); // logs either the string or the number

    oneLongString += output + "<br>";
}

$("#output").html(oneLongString);
