
$(function() {
  $("#add").on("click", function() {
    var val = $("input").val();
    if(val !== '') {
      var element = $("<li></li>").text(val);
      $(element).append("<button class='remove'>X</button>");
      $("#mylist").append(element);
      $("input").val("");
        // removes the items on the todo list
      $(".remove").on("click", function(){
        $(this).parent().remove();
      });
    }
  });
  //adds current date and time on the card
$(document).ready(function(){
    $("#current_date").fadein(Date());
});

var html = "<div id='blah'>Hello stuff here</div>";

$("#mycontent").append(html).fadeIn(999);


var sum = 1;
var X = 12;

if(x > sum ){
  console.log(x);
}
}); // end of main function
