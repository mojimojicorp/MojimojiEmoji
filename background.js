whale.browserAction.onClicked.addListener(() => {
    whale.tabs.create({
        url: `http://news.naver.com/`
    });
})