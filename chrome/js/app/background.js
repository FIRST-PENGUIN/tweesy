/*
 * `Ctrl + t` が押された時発火するイベント
 */
chrome.commands.onCommand.addListener(function(command) {
  chrome.windows.create({
    url: "popup.html",
    type: 'popup',
    width: 500,
    height: 300
  });
});
