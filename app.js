const special = '!@#$%^&*()'
const numeric = '1234567890'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'

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


function getRandomChar(list) {
    
    console.log(list)
    resultArr.push(list[Math.floor(Math.random() * list.length)])
}

function copyPassword() {
    let copyText = ''
    copyText = passwordText
    copyText.select()
    document.execCommand("copy");

    alert('Password copied to clipboard')

}



// Generate password function

function generate() {

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

    console.log(workingList)

    for(i=0; i < pwdLength.value; i++){
        resultArr.push(getRandomChar(workingList))
    }

    resultArr = resultArr.join('')
    
    // Update the DOM
    pwdResult.textContent = resultArr

    // Enable the Copy button
    copyBtn.disabled = false
}







// Test getting the range value

// Work out how to validate a check box is checked





generateBtn.addEventListener('click', generate)

copyBtn.addEventListener('click', copyPassword)
