
$(document).ready(function () {
    
    
  $("#add-box").focus();

  //Create variable for entering the item and appending it the unordered list
    
    var addItem = function () {
        var currentItem = $("#add-box").val();
        if (!currentItem || !currentItem.trim()) {
            alert("You didn't enter anything."); 
            }  
            else {
                $("#the-list").append("<li class='new-item'>" + currentItem + "<button class='remove-button'>X</button></li>");
            }   
        $("#add-box").val('');
        $("#add-box").focus();
    };

    //Allows the enter key to be used for adding an item

    $('#add-box').keypress(function (event) {
    	var currentItem = $("#add-box").val();
        if (event.keyCode == 13) {
        	return addItem();
           
        } 
    });

    //Makes the add button function when clicked
    
    $('#add-button').click(addItem);

    //Make the 'x' button appear and disappear when hovering over a list item.

    $("#the-list").on("mouseenter", ".new-item", function () {
    $(this).find(".remove-button").show();
  });

    $("#the-list").on("mouseleave", ".new-item", function () {
    $(this).find(".remove-button").hide();
  });

    //Toggle between checked off and not checked off

    $("#the-list").on("click", ".new-item", function () {
    $(this).toggleClass("checked");
  });

    //Remove items from the list

    $("#the-list").on("click", ".remove-button", function () {
    $(this).closest("li").remove();
  });    

   //Click the new list buttom and clear everything
    var clear = function() {
        $("#the-list").empty();
        $("#add-box").focus();
    };

    $("#new-button").click(clear);



});

