import "./styles.css";
const btn = document.getElementById("my-button");
const h1 = document.getElementById("heading");
var button1 = document.getElementById("add-data");
button1.addEventListener("click", myfunciton);
btn.addEventListener("click", function () {
  console.log("Hello World");
  h1.innerHTML = "My notebook";
});
function myfunciton() {
  var field = document.getElementById("userinput").value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(field));
  ul.appendChild(li);
}
