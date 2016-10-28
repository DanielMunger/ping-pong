//Back-End: Javascript
var upperLimit;
var replaceNumbers;
var inputedArray = [];

var replaceNumbers = function(limit) {
  for(i=1; i<=limit; i++){
    inputedArray.push(i);
  };
  for(i=0; i<inputedArray.length; i++){
    if(inputedArray[i] % 5 === 0 && inputedArray[i] % 3 ===0){
      inputedArray[i] = "Ping-Pong";
    }
    else if(inputedArray[i] % 5 === 0 && inputedArray[i] % 3 !==0){
      inputedArray[i] = "Pong";
    }
    else if(inputedArray[i] % 3 === 0 && inputedArray[i] % 5 !==0){
      inputedArray[i] = "Ping";
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
    for(i=0; i<inputedArray.length; i++){
      $("#output").html("<li>" + inputedArray[i] + "</li>");
    };
  });
});
