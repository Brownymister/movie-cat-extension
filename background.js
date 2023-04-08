chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
      url: "https://www.moviecat.azurewebsites.net",
  });
});
