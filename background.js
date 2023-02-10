const ON = "On";
const OFF = "Off";

const setBadgeText = (text) => {
    return chrome.action.setBadgeText({ text: text });
}

setBadgeText(OFF);

chrome.action.onClicked.addListener(async tab => {
    const cssDetails = (id) => {
        return {
            target: { tabId: id },
            files: ['style.css'],
        }
    }

    await chrome.action.getBadgeText({}).then(text => {
        if (text === OFF) {
            setBadgeText(ON);
            chrome.scripting.insertCSS(cssDetails(tab.id));
        } else {
            setBadgeText(OFF);
            chrome.scripting.removeCSS(cssDetails(tab.id));
        }
    });
})