
async function showSaldo(){
    let input = document.getElementById("inputShowSaldo")
    let output = document.getElementById("showSaldo")

    let url = 'http://127.0.0.1:8000/api/account/' + input.value
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(accounts => {
            this.saldo = accounts.saldo
            output.innerHTML = 'Saldo: ' + this.saldo
        }).then(response => {
            console.log(this.saldo)
    })
        .catch((error) => {
            console.log(error)
        });


}

function addSaldo(){
    let inputId = document.getElementById("inputAddSaldo")
    let inputAmount = document.getElementById("amountAddSaldo")
    let output = document.getElementById("addSaldo")


    let url = 'http://127.0.0.1:8000/api/topupaccount'
    fetch(url,
        {

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
            },

            method: "POST",
            body: JSON.stringify({amount: inputAmount, id: inputId})
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
}