function removeShit() {
  const divToRemove = document.getElementById("age-verification-container");
  if (divToRemove) {
    divToRemove.remove();
  }

  const divToRemove1 = document.getElementById("age-verification-wrapper");
  if (divToRemove1) {
    divToRemove1.remove();
  }
}

removeShit();