// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(event){
  $(this).toggleClass('completed')
  /* Act on the event */
});

//Click On X To Delete Todo
$("ul").on('click', 'span', function(event) {
  $(this).parent().fadeOut(500,function() {
  $(this).remove();
  });

  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13){
    //Grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + todoText + '</li>');
  }
})

$(".fa-plus").click(function(event) {
  $("input[type='text']").fadeToggle('fast');
});
