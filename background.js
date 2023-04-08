chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
      url: "https://moviecat.azurewebsites.net/",
  });
});
