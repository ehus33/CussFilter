document.getElementById('toggleFilter').addEventListener('click', function() {
  chrome.storage.sync.get('filterEnabled', function(data) {
    const enabled = !data.filterEnabled;
    chrome.storage.sync.set({ filterEnabled: enabled });
    document.getElementById('toggleFilter').textContent = enabled ? 'Disable Filter' : 'Enable Filter';
  });
});

chrome.storage.sync.get('filterEnabled', function(data) {
  document.getElementById('toggleFilter').textContent = data.filterEnabled ? 'Disable Filter' : 'Enable Filter';
});
