"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("script loaded.");
    // getAllBanks();
    // getBank('caymannationalbank');
    // getAccountsOfBank('caymannationalbank');
    // getTransactionsOfBank('caymannationalbank');
    // fillUpTableWithAccounts("belizebank");
    fillSelectWithBankNames();
    document.querySelector("select").addEventListener("change", checkBank);
}

function checkBank(){
    let select = document.querySelector("select");
    //todo: maybe make a switch because every bank has different properties in their objects.
    if (!(select.value == "selectbank")){
        changeSelectedBank(select.options[select.selectedIndex].text);
        fillUpTableWithAccounts(select.value);
    } else{
        resetSelectedBank();
    }
}

function resetSelectedBank(){
    document.querySelector("#selectedBank").innerText = "";
    document.querySelector("tbody").innerHTML = "";
}

function changeSelectedBank(bank){
    document.querySelector("#selectedBank").innerText = "Accounts of " + bank;
}

async function fillSelectWithBankNames(){
    let select = document.querySelector("select");
    try {
        const data = await allBanksAPICall('/banks');

        console.log('hi');
        for( let prop in data ){
            console.log(data[prop]);
            let opt = document.createElement('option');
            opt.value = data[prop].apiPath;
            opt.innerHTML = data[prop].name;
            select.appendChild(opt);
        }


    } catch (error) {
        console.error(error);
    }

}

async function fillUpTableWithAccounts(bankname){

    console.log(bankname);
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
    try {
        const data = await accountsOfBankAPICall(bankname + "accounts");
        console.log(data.length);
        console.log("got here");
        let i=0;

        for( let prop in data ){ //prop[data] is all the json objects
            for (let sec in data[prop]){ //prop[data][sec] is 1 JSON object
                console.log(data[prop][sec].account);
                let text;

                switch (bankname){
                    case "/belizebank/":
                        text = "                    <tr>\n" +
                            "                      <td>\n"  + data[prop][sec].id +
                            "                      </td>\n" +
                            "                      <td>\n" + data[prop][sec].gender +
                            "                      </td>\n" +
                            "                      <td>\n" + data[prop][sec].surname + " " + data[prop][sec].name +
                            "                      </td>\n" +
                            "                      <td>\n" + data[prop][sec].nationality +
                            "                      </td>\n" +
                            "                      <td class=\"text-center\">\n" + data[prop][sec].account.balance +
                            "                      <td>\n" +
                            "                    </tr>";


                        tbody.innerHTML += text;
                        break;
                }

            }
        }


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


async function FillBank(){
let array = getAllBanks()

console.log(array)


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
