chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'document.body.innerText'
  }, function(results) {
    var text = results[0];
    // Extract the customer contact information from the webpage using regular expressions or other methods
    var contact = extractContact(text);
    // Display the extracted contact information to the user
    alert(contact);
  });
});

function extractContact(text) {
  // Replace this with your own code to extract the contact information from the webpage
  return "Contact information not found";
}
