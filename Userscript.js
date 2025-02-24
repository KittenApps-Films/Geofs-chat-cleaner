// ==UserScript==
// @name         Chat cleaner
// @namespace    https://github.com/KittenApps-Films/Geofs-chat-cleaner
// @version      2025-02-09
// @description  Filters GeoFS chat for bad words
// @author       Noah S. Davidson, GeoFS call sign KittenFilms[KFA]
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
    let exeptions = ["fun", "cockpit", "fuel"]
    let bad = ["wtf", "damn"]
    var cleaner = document.createElement('script');
    cleaner.src="https://cdn.jsdelivr.net/npm/profanity-cleaner@latest";
    cleaner.id = "profanity-cleaner";
    document.body.appendChild(cleaner);
    var words = document.createElement('script');
    var stringE = ""
    var stringA = ""
    exeptions.forEach(exe)
    bad.forEach(maker)
    words.innerHTML = "let exeptions = [" + stringE + "]; let newBad = [" + stringA + "];";
    function exe(item, index) {
        stringE += "\""+item+"\","
    }
    function maker(item, index) {
        stringA += "\""+item+"\","
    }
    words.id = "Chat cleaner exeptions and allowed";
    document.body.appendChild(words);
    var chat = document.createElement('script');
    chat.src="https://kittenapps-films.github.io/Geofs-chat-cleaner/chat-cleaner.js";
    chat.id = "Chat cleaner add-on";
    document.body.appendChild(chat);
    console.log("Chat cleaner installed");
})
