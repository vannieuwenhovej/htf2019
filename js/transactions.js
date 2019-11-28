"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("script loaded.");
    getIDFromURL();
}


//==============================================================================================
//========================= PART FOR TRANSACTIONS FILE =========================================
//==============================================================================================

function getIDFromURL(){
    let url_string = window.location.href;
    let url = new URL(url_string);
    let c = url.searchParams.get("id");
    console.log(c);
}