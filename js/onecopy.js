function onecopy() {
    const list = document.querySelectorAll(".group .emoji-span-container .emoji-span");

    list.forEach(function (element) {
        new Clipboard(element, {
            text: function (trigger) {
                const img = trigger.querySelectorAll(".emoji")[0];
                return img.alt;
            }
        });
    });
}