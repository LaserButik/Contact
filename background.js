chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.body.innerText'
  }, function(results) {
    var text = results[0];
    // Extract the customer contact information from the webpage using regular expressions or other methods
    var contact = extractContact(text);
    // Open a viewer window to display the extracted contact information
    chrome.windows.create({
      url: "viewer.html",
      type: "popup",
      width: 400,
      height: 300
    }, function(window) {
      // Pass the extracted contact information to the viewer window
      chrome.tabs.sendMessage(window.tabs[0].id, {contact: contact});
    });
  });
});

function extractContact(text) {
  // Replace this with your own code to extract the contact information from the webpage
  return "Contact information not found";
}
