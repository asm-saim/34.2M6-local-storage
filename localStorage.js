const addRandomNumbers = () => {
    const numbers = Math.ceil(Math.random() * 100)
    console.log(numbers);
    localStorage.setItem("Number", numbers)
}

//get the random number:
const showRandomNumbers = () => {
    const showValue = localStorage.getItem("Number")
    console.log("Random Numbers added:", showValue)
} 