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

let resultArr = []


function getRandomChar(list) {
    
    console.log(list)
    resultArr.push(list[Math.floor(Math.random() * list.length)])
}


// Test the getRandomChar function
// getRandomChar(special)
// getRandomChar(numeric)
// getRandomChar(uppercase)
// getRandomChar(lowercase)
// getRandomChar(uppercase)
// getRandomChar(lowercase)
// getRandomChar(uppercase)
// getRandomChar(lowercase)
// getRandomChar(uppercase)
// getRandomChar(lowercase)





// Test getting the range value
console.log(pwdLength.value)
console.log(specialCheck.checked)
console.log(numericCheck.checked)
console.log(uppercaseCheck.checked)
console.log(lowercaseCheck.checked)

// Work out how to validate a check box is checked





generateBtn.addEventListener('click', function(){
    
    console.log('in the event')
})

console.log(resultArr.join(''))
resultArr = resultArr.join('')
console.log(resultArr)

// Update the DOM
pwdResult.textContent = resultArr