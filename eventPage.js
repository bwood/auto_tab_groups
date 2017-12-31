let exists = 1;

chrome.webNavigation.onCommitted.addListener(function (data) {
        //alert("here");
        // chrome.tabs.create({'url': "http://berkeley.edu"});

        let windowData = {
            url: data.url,
            tabId: data.tabId
        };

        chrome.windows.create(windowData);


    }
    , {
        url: [{hostSuffix: 'berkeley.edu'}]
    }
);


