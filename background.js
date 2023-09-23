chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "toggleAwards") {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const currentTab = tabs[0];
            if (currentTab && currentTab.id) {
                chrome.tabs.sendMessage(currentTab.id, { action: "toggleAwards", hide: message.hide });
            }
        });
    }
});
