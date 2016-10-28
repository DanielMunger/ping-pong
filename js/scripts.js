//Back-End: Javascript
var upperLimit;
var replaceNumbers;
var inputedArray = [];

var replaceNumbers = function(limit) {
  for(i=1; i<=limit; i++){
    inputedArray.push(i);
  };
  for(i=0; i<inputedArray.length; i++){
    if(inputedArray[i] % 15 === 0){
      inputedArray[i] = "Ping-Pong";
      console.log(inputedArray);

    }
    else{

    }
  };
};





//Front-End: Jquery
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    upperLimit = parseInt($("input#limit").val())
    replaceNumbers(upperLimit);
    $("#output").text(upperLimit);
  });
});
