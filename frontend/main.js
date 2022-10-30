
function showSaldo(){
    let input = document.getElementById("inputShowSaldo")
    console.log(input.value)
    let output = document.getElementById("showSaldo")
    let saldo = null

    let url = 'http://127.0.0.1:8000/api/account/' + input.value
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(accounts => {
            saldo = accounts.saldo
            output.innerHTML = 'Saldo: ' + saldo
        })
        .catch((error) => {
            console.log(error)
        });




}