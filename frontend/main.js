
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
    let inputId = document.getElementById("inputAddSaldo").value
    let inputAmount = document.getElementById("amountAddSaldo").value
    let output = document.getElementById("addSaldo")

    console.log(inputAmount)


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
        }).then(response => {
            return response.json();
    })
        .then(accounts => {
            output.innerHTML = 'Saldo: ' + accounts.saldo
        })
        .catch(function(res){ console.log(res) })
}