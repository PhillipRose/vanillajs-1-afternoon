console.log(`The House Always Wins!`)

let idInput = document.getElementById('idInput')
let colorInput = document.getElementById('colorInput')
console.log(colorInput, idInput)

function setCard (){
    const card = document.getElementById(idInput.value)
    // console.log(card)
    card.style.color = colorInput.value
    //console.log(card.style.color)
}
