function onecopy() {
    const list = document.querySelectorAll(".emoji-span-container .emoji-span");

    [].forEach.call(list, function (element) {
        new Clipboard(element, {
            text: function (trigger) {
                var img = trigger.querySelectorAll(".emoji")[0];
                return img.alt;
            }
        });
    });
}