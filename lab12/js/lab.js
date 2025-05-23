let variants = ["Fuji Apple", "Granny Apple", "Honey Crisp Apple", "WATERMELON"];

function sortIntoAnElement(dataLength) {
  let remainer = dataLength % 4;
  $("#output").append(". You grew a " + variants[remainer] + "!!");
}

function whatHappensOnClick() {
  console.log("click");

  let data = $("#input").val();
  let dataLength = data.length;

  if (data && dataLength <= 18) {
    $("#output").append("You have provided: " + data);
    sortIntoAnElement(dataLength);
    console.log("there is some data");
  } else if (dataLength >= 18) {
    $("#output").append("erm are you sure?");
  } else {
    $("#output").append("enter your last name");
  }
}

