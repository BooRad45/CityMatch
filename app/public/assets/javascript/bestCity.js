// In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
// In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
// Our api recognizes the route (/api/travelers)... and then runs the associated code (found in api-routes.js).
// In this case the associated code "saves" the data to the traveler-data.js file
$(document).ready(function() {

    $("#submit").on("click", function(event) {
        event.preventDefault();

        // Here we grab the form elements
        var travelerInfo = {
                name: $("#formGroupExampleInput").val(),
                scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
        };

        console.log(travelerInfo);

        // Grab the URL of the website
            var currentURL = window.location.origin;

        // This line is the magic. It"s very similar to the standard ajax function we used.
        // Essentially we give it an URL, we give it the object we want to send, then we have a "callback".
        // The callback is the response of the server. 

        $.post(currentURL + "/api/travelers", travelerInfo, function() {
            
        });
    });
});


    //         // Grab the result from the AJAX post so that the best match's name and photo are displayed.
    //             $("#matchName").text(data.name);
    //             $('#matchImg').attr("src", data.photo);

    //             // Show the modal with the best match 
    //             $("#resultsModal").modal('toggle');

    //         });
    //     else
    //     {
    //         alert("Please fill out all fields before submitting!");
    //     }
        
    //     return false;
    // });

 //End document.ready