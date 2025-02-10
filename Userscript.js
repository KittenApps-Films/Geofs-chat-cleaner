// ==UserScript==
// @name         Chat cleaner
// @namespace    http://tampermonkey.net/
// @version      2025-02-09
// @description  Filters Geofs chat for bad words
// @author       Noah S. Davidson, Geofs call sign KittenFilms[KFA]
// @match        http://geo-fs.com/geofs.php?v=*
// @match        http://www.geo-fs.com/geofs.php?v=*
// @match        https://geo-fs.com/geofs.php?v=*
// @match        https://www.geo-fs.com/geofs.php?v=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    'use strict';
    let exeptions = ["fun"]
    //let bad = ["I\'m"]
    var cleaner = document.createElement('script');
    cleaner.src="https://cdn.jsdelivr.net/npm/profanity-cleaner@latest";
    cleaner.id = "profanity-cleaner";
    document.body.appendChild(cleaner);
    var words = document.createElement('script');
    var stringE = ""
    //var stringA = ""
    exeptions.forEach(exe)
    //bad.forEach(maker)
    words.innerHTML = "let exeptions = [" + stringE + "]; ";//let newBad = [" + stringA + "];";
    function exe(item, index) {
        stringE += "\""+item+"\","
    }
    /*function maker(item, index) {
        stringA += "\""+item+"\","
    }*/
    words.id = "Chat cleaner exeptions and allowed";
    document.body.appendChild(words);
    var chat = document.createElement('script');
    //realismScript.src="https://raw.githack.com/KittenApps-Films/Geofs-fuel-addon/main/main.js";
    chat.innerHTML = `
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
    `
    chat.id = "Chat cleaner add-on";
    document.body.appendChild(chat);
    console.log("Chat cleaner installed");
})
