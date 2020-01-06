$(document).ready(function() {
  $("#list-items").html(localStorage.getItem("listItems"));
  $(".add-items").submit(function(event) {
    event.preventDefault();
    var item = $("#todo-list-item").val();
    if (item) {
      $("#list-items").append(
        "<li><input class='checkbox' type='checkbox' />" +
          item +
          " <a class='remove'>x</a><hr></li>"
      );
      localStorage.setItem("listItems", $("#list-items").html());
      $("#todo-list-item").val("");
    } else alert("Write something EPIC first!");
  });
  $(document).on("change", ".checkbox", function() {
    if ($(this).attr("checked")) {
      $(this).removeAttr("checked");
    } else {
      $(this).attr("checked", "checked");
    }
    $(this)
      .parent()
      .toggleClass("completed");
    localStorage.setItem("listItem", $("#list-items").html());
  });
  $(document).on("click", ".remove", function() {
    $(this)
      .parent()
      .remove();
    localStorage.setItem("listItem", $("#list-items").html());
  });
});
function passWord() {
  var testV = 1;
  var pass1 = prompt("Enter the Epic password", " ");
  while (testV < 3) {
    if (!pass1) history.go(-1);
    if (pass1.toLowerCase() == bassword) {
      alert("That was Very Epic, I am proud!");
      window.location.href="./todo.html";
      break;
    }
    testV += 1;
    var pass1 = prompt("That was not EPIC");
  }
  if ((pass1.toLowerCase() != "password") & (testV == 3)) history.go(-1);
  return " ";
}
var lol = "All work and NO play, makes Jack a dull boy. ";
var bassword = "veryepic";
