function getResults() {
    $("#results").empty();
    $.getJSON("/all", function (data) {
        for (var i = 0; i < data.length; i++) {
            $("#results").prepend("<p class='data-entry' data-id=" + data[i]._id + "><span class='dataTitle' data-id=" +
                data[i]._id + ">" + data[i].title + "</span><span class='delete'>X</span></p>");
        }
    });
}

// $(document).on("click", "#make-new", function () {
//     $.ajax({
//         type: "POST",
//         dataType: "json",
//         url: "/submit",
//         data: {
//             title: $("#title").val(),
//             note: $("#note").val(),
//             created: Date.now()
//         }
//     })
//         .then(function (data) {
//             // Add the title and delete button to the #results section
//             $("#results").prepend("<p class='data-entry' data-id=" + data._id + "><span class='dataTitle' data-id=" +
//                 data._id + ">" + data.title + "</span><span class='delete'>X</span></p>");
//             // Clear the note and title inputs on the page
//             $("#note").val("");
//             $("#title").val("");
//         });
// });
