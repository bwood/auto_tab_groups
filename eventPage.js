chrome.webNavigation.onCommitted.addListener(function (data) {
        let windowData = {
            tabId: data.tabId
        };
        chrome.windows.create(windowData);
    }
    , {
        url: [{hostSuffix: 'berkeley.edu'}]
    }
);


