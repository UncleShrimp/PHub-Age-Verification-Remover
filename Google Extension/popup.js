console.log('This is a popup!');

function removeShit() {
  const divToRemove = document.getElementById("age-verification-container");
  if (divToRemove) {
    divToRemove.remove();
  }

  const divToRemove1 = document.getElementById("age-verification-wrapper");
  if (divToRemove1) {
    divToRemove1.remove();
  }


  const divToRemove3 = document.getElementById("modalWrapMTubes");
  if (divToRemove3) {
    divToRemove3.remove();
  }

  const divToRemove4 = document.getElementById("ageDisclaimerMainBG");
  if (divToRemove4) {
    divToRemove4.remove();
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const myButton = document.getElementById('myButton');
  myButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: removeShit // Function to be executed in the active tab
      });
    });
  });
});
