function rentItem(itemName) {
  alert("You selected to rent: " + itemName + ". Payment integration coming soon!");
}

document.getElementById("postForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("itemName").value;
  const desc = document.getElementById("itemDesc").value;
  alert("Item posted: " + name + " - " + desc + ". (Backend needed to save this!)");
});
