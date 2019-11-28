"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("script loaded.");
    getAllBanks();
    getBank('caymannationalbank');
    getAccountsOfBank('caymannationalbank');
    getTransactionsOfBank('caymannationalbank');
    fillUpTableWithAccounts("belizebank");
}


async function fillUpTableWithAccounts(bankname){
  let tbody = document.querySelector("tbody");
    try {
        const data = await accountsOfBankAPICall('/' + bankname + "/accounts");
        console.log(data.length);
        console.log("got here");
        for (let i=0; i<data.length; i++){
            console.log("NUMBER " + i + " " + JSON.stringify(data[i]));
        }

        // let text = "\n" +
        //     "                    <tr>\n" +
        //     "                      <td>\n" +  +
        //         "                      </td>\n" +
        //     "                      <td>\n" +
        //     "                        Niger\n" +
        //     "                      </td>\n" +
        //     "                      <td>\n" +
        //     "                        Oud-Turnhout\n" +
        //     "                      </td>\n" +
        //     "                      <td>\n" +
        //     "                        Oud-Turnhout\n" +
        //     "                      </td>\n" +
        //     "                      <td class=\"text-center\">\n" +
        //     "                        $36,738\n" +
        //     "                      </td>\n" +
        //     "                    </tr>";
        // tbody.innerHTML += data;


    } catch (error) {
        console.error(error);
    }

}

// =============================================================================
// ========================== API CALLS ========================================
// =============================================================================

const baseurl = "https://htf.zinderlabs.com";


async function testAPI(){
    try {
        const data = await testAPICall('/banks');
        console.log(data); // JSON-string from `response.json()` call
    } catch (error) {
        console.error(error);
    }
}


async function testAPICall(url = '', data = {}) {
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

// =============================================================================================
// ALL BANKS
async function allBanksAPICall(url = '', data = {}) {
    let baseurl = "https://htf.zinderlabs.com";
    const response = await fetch(baseurl + url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'cc6a77ff1309fd4516b9b9b0b929f7a1'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
    });
    return await response.json();
}

//ASYNC FUNCTION to call the function
async function getAllBanks(){
    try {
        const data = await allBanksAPICall('/banks');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
// =============================================================================================


// =============================================================================================
// BANK BY NAME
async function bankByNameAPICall(url = '', data = {}) {
    let baseurl = "https://htf.zinderlabs.com";
    const response = await fetch(baseurl + url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'cc6a77ff1309fd4516b9b9b0b929f7a1'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
    });
    return await response.json();
}

//ASYNC FUNCTION to call the function
async function getBank(bankname){
    try {
        const data = await bankByNameAPICall('/' + bankname);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
// =============================================================================================


// =============================================================================================
// ACCOUNTS OF BANK
async function accountsOfBankAPICall(url = '', data = {}) {
    let baseurl = "https://htf.zinderlabs.com";
    const response = await fetch(baseurl + url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'cc6a77ff1309fd4516b9b9b0b929f7a1'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
    });
    return await response.json();
}

//ASYNC FUNCTION to call the function
async function getAccountsOfBank(bankname){
    try {
        const data = await accountsOfBankAPICall('/' + bankname + "/accounts");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
// =============================================================================================



// =============================================================================================
// TRANSACTIONS OF BANK
async function transactionsofBankCall(url = '', data = {}) {
    let baseurl = "https://htf.zinderlabs.com";
    const response = await fetch(baseurl + url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'cc6a77ff1309fd4516b9b9b0b929f7a1'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
    });
    return await response.json();
}

//ASYNC FUNCTION to call the function
async function getTransactionsOfBank(bankname){
    try {
        const data = await transactionsofBankCall('/' + bankname + "/transactions");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
// =============================================================================================
