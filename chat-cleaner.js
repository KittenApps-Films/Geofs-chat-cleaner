'use strict'
setTimeout(function(){
    var exectionalWords = exeptions;
    //var badWordsArray = newBad;
    console.log("Chat running");
    setInterval(clean, 100);
    function clean() {
    let chat = document.getElementsByClassName('geofs-chat-message')
    for (let item of chat) {
    item.innerHTML = profanityCleaner.clean(item.innerHTML, { exceptions: exectionalWords })
}
    }
}, 2000);
//it worked
