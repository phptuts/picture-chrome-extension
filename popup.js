chrome.storage.sync.get('url', function(data) {
  if (data.url) {
    document.getElementById('logo_image').src = data.url;
  }
});
