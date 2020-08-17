//Check Off When Task is Done
$(".list").on("click", "li", function(){
    $(this).toggleClass("done");
});

//Remove task when click on trash icon

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Add a new task 

$('input[type="text"]').on("keypress", function(event){
    let value = $(this).val();
    if (event.which === 13 && value !== ""){
        let newTask = $(this).val();
        $(this).val("");
        $(".list").append("<li><span><i class='fas fa-trash-alt'></i></span> "  + newTask + "</li>");
    }
});

$(".add").on("click", function(){
    $("input").fadeToggle("fast");
});

//Date and Time

let dt = new Date();
$("#date").html(dt.toLocaleDateString());