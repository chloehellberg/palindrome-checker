$(document).ready(function() {
  $("#formOne").submit(function(event) {
  
    let word = $("input#wordCheck").val();
    let reverseWord = word.split('').reverse().join('');  

    if (word === reverseWord) {
      $(".reveal").text("This is a palindrome!");
    } else {
      $(".reveal").text("This is not a palindrome!")
    }

    $("#answer").show();
    event.preventDefault();
  });
});