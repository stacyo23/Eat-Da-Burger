// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  //jquery function to change devoured to true if the "devour it" button is clicked
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
  
      var newBurgerState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // keeps page from refreshing.
      event.preventDefault();
  
      //takes in the new burger name
      var newBurger = {
        name: $("#burger").val().trim(),
    
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  