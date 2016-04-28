"use-strict";

var Translator = (function(language){
 var lexicon = {
    merry: "merry",
    christmas: "nolliag",
    and: "agus",
    a: "a",
    happy: "sona",
    new: "ùr",
    year: "bliadhna",
    holidays: "saor-làithean",
    seasons: "ràithean",
    greetings: "soraidh",
    peace: "sìth",
    on: "air",
    earth: "talamh",
    goodwill: "deagh-ghean",
    to: "gu",
    men: "fir",
    we: "tha sinn a '",
    wish: "airson",
    you: "thu",
    wishing: "a tha ag iarraidh",
    holiday: "saor-làithean",
    season: "ràith",
    may: "A' Chèitean",
    the: "a '",
    force: "feachd",
    be: "a bhith",
    with: "le"
 };

language.translateToGaelic = function(input){
 console.log(lexicon);
}

return language;

})(Translator || {});