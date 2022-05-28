chrome.tabs.onUpdated.addListener((tabId, tab) => {
  chrome.tabs.sendMessage(tabId, {
    call: 'response',
  });
  if (
    tab.url &&
    tab.url.includes(
      'forums.sufficientvelocity.com/threads/marked-for-death-a-rational-naruto-quest.24481/'
    )
  ) {
    const queryParameters = tab.url.split('24481')[1];
    const urlParameters = new URLSearchParams(queryParameters);
    chrome.tabs.sendMessage(tabId, {
      type: 'NEW',
      pageId: urlParameters.get('page'),
    });
  }
});
