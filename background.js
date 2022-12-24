chrome.tabs.executeScript({
  code: 'document.querySelector("#customer-contact").textContent'
}, (result) => {
  console.log(result[0]);
});
