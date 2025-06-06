// Using the core $.ajax() method
const ajaxObj = {
  url: "https://yesno.wtf/api",
  type: "GET",
  dataType: "json",
}

$("#output").click(function() {
    console.log("Click!");
    $.ajax(ajaxObj)
    .done(function(data) {
      // callback for success
      console.log("Success!");
      console.log(data);
      let answer = data.answer;
      let imgURL = data.image;
      let imageHTML = `<img src='${imgURL}'>`;
      $("#output").html("<h3>" + answer + "</h3>");
      $("#output").append(imageHTML);
  })
    // callback for failure
    .fail(function(xhr, status, errorThrown) {
      // do stuff
      console.log(errorThrown + " Status:" + status);
  })
});

