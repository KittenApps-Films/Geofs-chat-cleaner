'use strict'
setTimeout(function(){
    console.log("Chat running");
    setInterval(clean, 100);
    function clean() {
    let chat = document.getElementsByClassName('geofs-chat-message')
    for (let item of chat) {
    item.innerHTML = profanityCleaner.clean(item.innerHTML, { exceptions: exeptions, customBadWords: newBad })
}
    }
}, 2000);
