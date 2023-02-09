chrome.action.setBadgeText({ text: "Off" });

chrome.action.onClicked.addListener(async tab => {
    await chrome.action.getBadgeText({}).then(text => {
        if (text === "Off") {
            chrome.action.setBadgeText({ text: "On" });
            chrome.scripting.insertCSS({
                target: { tabId: tab.id },
                files: ['style.css'],
            })
        } else {
            chrome.action.setBadgeText({ text: "Off" });
            chrome.scripting.removeCSS({
                target: { tabId: tab.id },
                files: ['style.css'],
            })
        }
    });
})