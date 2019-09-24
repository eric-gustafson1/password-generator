// Variables for the 4 different character sets
const special = '!@#$%^&*()'
const numeric = '1234567890'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'

// Variables for DOM elements
let bootstrapSuccess = document.querySelector('.alert-success')
let bootstrapWarning = document.querySelector('.alert-warning')
let pwdResult = document.getElementById('password')
let pwdLength = document.getElementById('range')
let specialCheck = document.getElementById('specialBox')
let numericCheck = document.getElementById('numericBox')
let uppercaseCheck = document.getElementById('uppercaseBox')
let lowercaseCheck = document.getElementById('lowercaseBox')
let generateBtn = document.getElementById('generate')
let copyBtn = document.getElementById('copy')
let passwordText = document.getElementById('password')
let checkboxes = document.querySelectorAll('.form-check-input')
let rangeSlider = document.querySelector('.range')
let rangeDlispay = document.getElementById('range')
let rangeEval = document.querySelector('.range-eval')
let card = document.querySelector('.card')

// Variables for output
let workingList = ''
let resultArr = []
let checkCount = 0

// Hide Bootsrap 4 alerts on load
bootstrapSuccess.style.display = 'none'
bootstrapWarning.style.display = 'none'

// Function to generate a random character from list input parameter
function getRandomChar(list) {
    resultArr.push(list[Math.floor(Math.random() * list.length)])

}

// Function to copy password to clipboard 
function copyPassword() {
    let copyText = ''
    copyText = passwordText
    copyText.select()
    document.execCommand("copy");

    bootstrapSuccess.style.display = 'block'
}

// Function to generate password based on input

function generate() {
    // Hide both bootstrap alerts
    bootstrapSuccess.style.display = 'none'
    bootstrapWarning.style.display = 'none'

    // Reset the result array to empty
    resultArr = []

    // Clear the working list of characters 
    workingList = ''

    // set loop count from Range UI
    let loopCount = pwdLength.value

    // // Convert the nodelist to an array to parse with forEach
    // checkboxes = Array.from(checkboxes)

    // Look at each checkbox and add char set to working list if checked
    checkboxes.forEach(function (checkbox) {

        if (checkbox.checked) {

            // if the special box is checked add the special char set to workingList and add one special char to the reultArr.  Decrment loopCount
            if (checkbox.id === 'specialBox') {
                workingList += special
                getRandomChar(special)
                loopCount--

                // if the numeric box is checked add the numeric char set to workingList and add one numeric char to the reultArr. Decrement loopcount
            } else if (checkbox.id === 'numericBox') {
                workingList += numeric
                getRandomChar(numeric)
                loopCount--

                // if the uppercase box is checked add the uppercase char set to workingList and add one uppercase char to the reultArr. Decrement loopcount
            } else if (checkbox.id === 'uppercaseBox') {
                workingList += uppercase
                getRandomChar(uppercase)
                loopCount--

                // if the lowercase box is checked add the lowercase char set to workingList and add one lowercase char to the reultArr. Decrement loopcount
            } else if (checkbox.id === 'lowercaseBox') {
                workingList += lowercase
                getRandomChar(lowercase)
                loopCount--

            } else {
                bootstrapWarning.style.display = 'block'
                copyBtn.disabled = true
            }
        }
    })

    // If no user criteria are selected then alert the user
    if (!specialCheck.checked && !numericCheck.checked && !uppercaseCheck.checked && !lowercaseCheck.checked) {
        bootstrapWarning.style.display = 'block'
        copyBtn.disabled = true
    }

    // If at least one user criteria is selected then enable the Copy button
    if (specialCheck.checked || numericCheck.checked || uppercaseCheck.checked || lowercaseCheck.checked) {
        copyBtn.disabled = false
    }


    // Add random characters to password array the amount of times the user selects from Range input
    for (i = 0; i < loopCount; i++) {
        resultArr.push(getRandomChar(workingList))
    }

    // Randomize/shuffle the array
    // Using Fisher-Yates Algorithm (https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb)
    for (let j = resultArr.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * j)
        const temp = resultArr[j]
        resultArr[j] = resultArr[k]
        resultArr[k] = temp
    }

    // Use Join to remove commas from array
    resultArr = resultArr.join('')

    // Update the DOM
    pwdResult.textContent = resultArr
}

// Function to give UI feedback on password length
function passwordFeedback() {
    
    // Convert the nodelist to an array to parse with forEach
    checkboxes = Array.from(checkboxes)
    checkCount = 0

    // Count the number of checked char set boxes
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkCount++

        }
    })

    if (pwdLength.value < 24 && checkCount < 3 ) {
        rangeEval.textContent = 'Weak Password'
        rangeEval.style.color = 'red'

    } else if (pwdLength.value > 64 && checkCount > 2 && checkCount > 2) {
        rangeEval.textContent = 'Strong Password'
        rangeEval.style.color = 'green'

    } else if (pwdLength.value > 24 || pwdLength.value < 64 && checkCount > 2) {
        rangeEval.textContent = 'Medium Strength Password'
        rangeEval.style.color = 'orange'

    } else {
        rangeEval.textContent = 'Medium Strength Password'
        rangeEval.style.color = 'orange'

    }

}

// Event Handlers
// Generate Password Button Click
generateBtn.addEventListener('click', generate)

// Copy Password button Click
copyBtn.addEventListener('click', copyPassword)

// Card click events
card.addEventListener('click', passwordFeedback)
