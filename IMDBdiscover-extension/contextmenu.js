chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  var contexts      = ["selection","link","editable"],
      contextLength = contexts.length;

  for (var i = 0; i < contextLength; i++) {
    var context = contexts[i],
        title   = "IMDB Discover",
        id      = chrome.contextMenus.create({
                    "title":    title,
                    "contexts": [context],
                    "id":       "context" + context
                  });
  }
});

function onClickHandler(info, tab) {
  // DEBUG
  // console.log("item " + info.menuItemId + " was clicked");
  // console.log("info: " + JSON.stringify(info));
  // console.log("tab: " + JSON.stringify(tab));
  chrome.tabs.create({
    url: 'https://www.google.com.br/?utm_source=extension-imdbdiscover&#q=imdb ' + info.selectionText
  });
}
