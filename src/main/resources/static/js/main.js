$(function() {

  const appendBook = function(data) {
  var bookCode = "<span>" + data.name + "</span>" +
              "Year of issue: " + data.year;
              $("#book-list")
              .append("<div>" + bookCode + "</div>");
  };

  //Loading books on load page
  $.get("/books/", function(response) {
         for(i in response) {
             appendBook(response[i]);
         }
  });

  //Show adding book form
  $("#show-form-add-book").click(function() {
          $("#book-form").css("display", "flex");
  });

  //Closing adding book form
  $("#book-form").click(function(event) {
          if(event === this) {
          $(this).css("display", "none");
          }
  });

  //Adding book
  $("#save-book").click(function() {
          var data = $("#book-form form").serialize();
          $.ajax({
              method: "POST",
              url: "/books/",
              data: data,
              success: function(response) {
                  $("#book-form").css("display", "none");
                  var book = {};
                  book.id = response.id;
                  var dataArray = $("#book-form form").serializeArray();
                  for(i in dataArray) {
                      book[dataArray[i]["name"]] = dataArray[i]["value"];
                  }
                  appendBook(book);
              }
          });
          return false;
    });
});