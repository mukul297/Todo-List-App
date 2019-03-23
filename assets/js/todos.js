//Check of Specific Todos by clicking
$("ul").on("click","li",function(){
   $(this).toggleClass("completed");
});

//Click on X to Delete Todos

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(1000,function(){
    	$(this).remove();
    });
    event.stopPropagation();
});

// add the recently added task to the Todo List.

$("input").keypress(function(event){
   if(event.which===13){
    //grabbing new todo text from input
   	var todoText = $(this).val();
   	$(this).val("");
   	// create a new li and add to ul
   	$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+todoText+"</li>");
   }
});

// when clicked on plus  fadeOut input

$(".fa-plus").click(function(){
	$("input").fadeToggle();
}) 