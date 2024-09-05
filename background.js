chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ filterEnabled: true }, () => {
    console.log("Hate Comment Filter installed and enabled by default.");
  });
});
