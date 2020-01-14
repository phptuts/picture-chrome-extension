document.querySelector('button').addEventListener('click', function() {
  const url = document.querySelector('#image').value;

  chrome.extension.sendMessage({ url });
  getImageToReplace();
});

function getImageToReplace() {
  chrome.storage.sync.get('url', function(data) {
    if (data.url) {
      document.getElementById('replace_image').src = data.url;
    }
  });
}

getImageToReplace();
