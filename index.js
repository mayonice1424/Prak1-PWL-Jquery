var produk_options = document.getElementById("produk_options");
var add_more_fields = document.getElementById("add_more_fields");
var remove_fields = document.getElementById("remove_fields");

add_more_fields.onclick = function () {
  var newField = document.createElement("input");
  newField.setAttribute("type", "text");
  newField.setAttribute("name", "produk_options[]");
  newField.setAttribute("class", "produk_options");
  newField.setAttribute("siz", 50);
  newField.setAttribute("placeholder", "Jumlah");
  produk_options.appendChild(newField);
};

remove_fields.onclick = function () {
  var input_tags = produk_options.getElementsByTagName("input");
  if (input_tags.length > 1) {
    produk_options.removeChild(input_tags[input_tags.length - 1]);
  }
};
