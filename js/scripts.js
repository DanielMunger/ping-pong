//Back-End: Javascript
var upperLimit;



//Front-End: Jquery
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    upperLimit = parseInt($("input#limit").val())
    console.log(upperLimit);
  });
});
