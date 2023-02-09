function changeTextGradient(){
    const link = document.createElement('link');
    link.href = chrome.runtime.getURL('style.css');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.getElementsByTagName("head")[0].appendChild("link");
}

chrome.action.onClicked.addListener(async tab => {
    try{
        await chrome.scripting.insertCSS({
        target: {tabId: tab.id},
        files: ['style.css'],
        })
    } catch (err) {
        console.log(err);
    }
})