chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Display the extracted contact information in the viewer window
  document.getElementById("contact").innerText = message.contact;
});
