document.getElementById("searchInput").addEventListener("change", function() {
  var input = document.getElementById("searchInput");
  var filter = input.value.toUpperCase();

  var list = document.getElementsByClassName("emoji-span");

  for (var i = 0; i < list.length; i++) {
    var txtValue = list[i].getAttribute("title");
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
});
