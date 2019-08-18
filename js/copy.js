const list = document.querySelectorAll('.emoji-span-container .intercom-emoji-picker-emoji'); 
 
[].forEach.call(list,function(element){
    new Clipboard(element, {
        text:function(trigger){
            return trigger.innerHTML;
        }
    });
});
 

    

