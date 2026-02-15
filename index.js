const input = document.getElementById("search");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

const button = document.getElementById("submit");
