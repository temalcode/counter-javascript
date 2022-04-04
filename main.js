
const incrementButton = document.getElementById('incrementBtn')
const resetButton = document.getElementById('resetBtn')
const decrementButton = document.getElementById('decrementBtn')
const counterText = document.getElementById('counterText')

let count = 0

if(localStorage.getItem("counterValue") == ""){
    count = 0
}
else{
    count = localStorage.getItem("counterValue")
    counterText.innerText = count
}

incrementButton.addEventListener('click', () => {
    count++
    counterText.innerText = count
    localStorage.setItem("counterValue", count)
})

resetButton.addEventListener('click', () => {
    count = 0
    counterText.innerText = count
    localStorage.setItem("counterValue", count)
})

decrementButton.addEventListener('click', () => {
    count--
    counterText.innerText = count
    localStorage.setItem("counterValue", count)
})