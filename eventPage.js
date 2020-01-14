// This should only happen once
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: 'replaceImage',
    title: 'Replace All Images',
    contexts: ['image']
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.url) {
    chrome.storage.sync.set({ url: request.url }, function() {
      console.log('saved url');
    });
  }
});

chrome.contextMenus.onClicked.addListener(function(clickedData) {
  if (
    clickedData.menuItemId == 'replaceImage' &&
    clickedData.mediaType === 'image'
  ) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        src: clickedData.srcUrl,
        type: 'replace_image'
      });
    });
  }
});
