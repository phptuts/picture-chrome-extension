console.log(
  'I am a content script running, this is where you can change the html of a page.'
);
chrome.runtime.onMessage.addListener(function(message, sender, reply) {
  if (message.type === 'replace_image') {
    const imgs = [...document.getElementsByTagName('img')].filter(
      (img) => img.src == message.src
    );

    chrome.storage.sync.get('url', function(data) {
      if (data.url) {
        imgs.forEach((img) => {
          img.src = data.url;
        });
      }
    });
  }
});
