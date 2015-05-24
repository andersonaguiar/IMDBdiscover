// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The onClicked callback function.
function onClickHandler(info, tab) {
  // console.log("item " + info.menuItemId + " was clicked");
  // console.log("info: " + JSON.stringify(info));
  // console.log("tab: " + JSON.stringify(tab));
  chrome.tabs.create({ url: 'https://www.google.com.br/?utm-source=extension-imdbdiscover&#q=imdb ' + info.selectionText });
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  var contexts = ["selection","link","editable"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "IMDB Discover";
    var id = chrome.contextMenus.create({
      "title": title,
      "contexts": [context],
      "id": "context" + context
    });
  }
});
