// ==UserScript==
// @name       Audio Crapload Tool
// @author       Dan Misener
// @namespace  http://misener.org
// @version    0.4
// @description  Have some fun with the Audio Upload Tool.
// @include     https://cms.nm.cbc.ca/audiouploadtool/*
// @match       https://cms.nm.cbc.ca/audiouploadtool/*
// @updateURL	https://github.com/misener/Audio-Crapload-Tool/raw/master/audiocraploadtool.user.js
// ==/UserScript==
 
document.getElementsByTagName('h1')[0].innerHTML = "Audio Crapload Tool";
document.getElementsByTagName('img')[0].src = "https://raw.githubusercontent.com/misener/Audio-Crapload-Tool/master/pileofpoo.png";
