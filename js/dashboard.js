"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {


    console.log("script loaded.");
    dashboardchart1();
}



async function dashboardchart1(){

    let data;
    let arrayBanks = [];
    try {
        data = await allBanksAPICall('/banks');

        console.log('hi');
        for (let prop in data) {
            arrayBanks.push(data[prop].name);
        }
    }

    catch (error) {
        console.error(error);
    }




    let amount;
    let arrayAmount = [];
    try {
        for(let i=0; i<arrayBanks.length; i++){
            arrayAmount.push(await getTotalAmountOfAccounts(data[i].apiPath));
        }
    }

    catch (error) {
        console.error(error);
    }


    var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];
    var options = {
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function(chart, w, e) {
                    console.log(chart, w, e )
                }
            },
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true
            }
        },
        dataLabels: {
            enabled: false,
        },
        series: [{
            data: arrayAmount
        }],
        xaxis: {
            categories: arrayBanks,
            labels: {
                style: {
                    colors: colors,
                    fontSize: '14px'
                }
            }
        }
    };

    var chart = new ApexCharts(
        document.querySelector("#chart"),
        options
    );
    let total = 0;
    for (let i=0; i<arrayAmount.length; i++){
        total = total + arrayAmount[i];
    }
    document.querySelector("#amountAccs").innerText = total;
    chart.render();
}



// ===============================================================================

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

async function getTotalAmountOfAccounts(bankname){
    try {
        const data = await accountsOfBankAPICall(bankname + "accounts");
        console.log("got here");
        let i = 0;

        for (let prop in data) { //prop[data] is all the json objects
            i += data[prop].length;
        }
        return i;
    }
    catch(error){
        console.log(error);
    }
}




// ACCOUNTS OF BANK
async function accountsOfBankAPICall(url = '', data = {}) {
    let baseurl = "https://htf.zinderlabs.com";
    console.log(baseurl + url);
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