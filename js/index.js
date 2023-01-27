document.querySelector("#btn-menu").addEventListener("click", function () {
  var parr = document.querySelector("#opciones-menu");

  if (parr.style.display === "none") {
    parr.style.display = "block";
  } else {
    parr.style.display = "none";
  }
});
