
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

    let url = 'http://127.0.0.1:8000/api/account/' + inputId.value
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(accounts => {
            this.saldo = accounts.saldo
            output.innerHTML = 'Saldo: ' + saldo
        })
        .catch((error) => {
            console.log(error)
        });
}