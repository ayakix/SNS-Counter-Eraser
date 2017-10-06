'use strict';

$(function(){
  var path = chrome.extension.getURL('css/override.css');
  var cssElem = $('<link rel="stylesheet" href="' + path + '">');
  $('head link:last').after(cssElem);
});

