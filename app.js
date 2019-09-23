const special = '!@#$%^&*()'
const numeric = '1234567890'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'

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

let resultArr = []

// Hide Bootsrap 4 alerts on load
bootstrapSuccess.style.display = 'none'
bootstrapWarning.style.display = 'none'


// Generate a random character from list input parameter
function getRandomChar(list) {
    resultArr.push(list[Math.floor(Math.random() * list.length)])

}

// Copy password to clipboard function
function copyPassword() {
    let copyText = ''
    copyText = passwordText
    copyText.select()
    document.execCommand("copy");

    bootstrapSuccess.style.display = 'block'
}



// Generate password function

function generate() {
    bootstrapSuccess.style.display = 'none'
    bootstrapWarning.style.display = 'none'

    // If no user criteria are selected then alert the user
    if(!specialCheck.checked && !numericCheck.checked && !uppercaseCheck.checked && !lowercaseCheck.checked) {
        bootstrapWarning.style.display = 'block'
        copyBtn.disabled = true
    }

    // If at least one user criteria is selected then enable the Copy button
    if(specialCheck.checked || numericCheck.checked || uppercaseCheck.checked || lowercaseCheck.checked) {
        copyBtn.disabled = false
    }


    let workingList = ''
    resultArr = []

    if(specialCheck.checked) {
        workingList += special
    }

    if(numericCheck.checked) {
        workingList += numeric
    }

    if(uppercaseCheck.checked) {
        workingList += uppercase
    }

    if(lowercaseCheck.checked) {
        workingList += lowercase
    }

    // Add random char to password array the amount of times the user selects from Range input
    for(i=0; i < pwdLength.value; i++){
        resultArr.push(getRandomChar(workingList))
    }

    // Use Join to remove commas from array
    resultArr = resultArr.join('')
    
    // Update the DOM
    pwdResult.textContent = resultArr

    
}

// Event Handlers


// Generate Password Button Click
generateBtn.addEventListener('click', generate)

// Copy Password button Click
copyBtn.addEventListener('click', copyPassword)
