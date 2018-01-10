let rules = {
    group1: {
        url: [
            //{hostSuffix: 'berkeley.edu'},
            //{hostSuffix: 'stanford.edu'}
            // Match any file on hard drive. Use File>Open
            {pathPrefix: '/Users'}
        ]
    }
};

chrome.webNavigation.onCompleted.addListener(function (data) {
        let groups = getGroups();
        if (groups.group1 == undefined) {
            chrome.windows.create({tabId: data.tabId}, function (window) {
                setGroups('group1', window.id);
            });
        }
        else {
            chrome.tabs.move(data.tabId, {windowId: window.id});
        }
    }
    , rules.group1
);

function getGroups() {
    let groups = {};
    chrome.storage.local.get('groups', function (items) {
        //alert("Got " + items.groups);
        if (items.groups) {
            groups = items.groups;
        }
    });
    return groups;
}

function setGroups(name, windowId) {
    let groups = getGroups();
    groups[name] = windowId;
    chrome.storage.local.set({groups: groups});
    //chrome.storage.local.get('groups', function (items) {
//        alert("Got2 " + items.groups);
//    })
}
