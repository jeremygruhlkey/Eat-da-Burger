// front end jQuery form controls for html.

$(function() {
    $(".eat-it").on("click", function(event){
        let id = $(this).data("id");
        console.log("id: ", id);
        let newEatenState = {
            eaten: 1
        };
        console.log("newEatenState:")
        console.log(newEatenState);
        // Send AJAX PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function(){
                location.reload();
            }
        )
    })

    $(".burger-maker-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = { name: $("#burger").val().trim(), eaten: 0 };

        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("New burger created")
                location.reload();
            }
        )
    })
})