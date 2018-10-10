let guessing = () => {
    let result = document.getElementById("result").value
    guess = (result - 250) / 100
    if (guess <= 1) {
        document.getElementById("guess").innerHTML = "Number Undefined!!"
    }
    else {
        document.getElementById("guess").innerHTML = `Your Guessing Number is ${guess}`
    }
}



