"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("script loaded.");
    testAPI()
}


async function testAPI(){
    try {
        const data = await testAPICall('/banks');
        console.log(data); // JSON-string from `response.json()` call
    } catch (error) {
        console.error(error);
    }
}

// function testAPICall(){
//     let baseurl = "https://htf.zinderlabs.com";
//
//     fetch(baseurl + "/banks", { method:"GET", headers: { "Authorization": "cc6a77ff1309fd4516b9b9b0b929f7a1" }}) // Call the fetch function passing the url of the API as a parameter
//         .then(function(res) {
//             console.log(res);
//         })
//         .catch(function(err) {
//             console.log(err);
//         });
//
// }



async function testAPICall(url = '', data = {}) {
    let baseurl = "https://htf.zinderlabs.com";
        // Default options are marked with *
        const response = await fetch(baseurl + url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'cc6a77ff1309fd4516b9b9b0b929f7a1'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
        });
        return await response.json(); // parses JSON response into native JavaScript objects
}



