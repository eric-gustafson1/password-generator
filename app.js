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
let checkboxes = document.querySelectorAll('.form-check-input')
let workingList = ''

let resultArr = []

// Hide Bootsrap 4 alerts on load
bootstrapSuccess.style.display = 'none'
bootstrapWarning.style.display = 'none'

// console.log(checkboxes)



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
    // Hide both bootstrap alerts
    bootstrapSuccess.style.display = 'none'
    bootstrapWarning.style.display = 'none'

    // Reset the result array to empty
    resultArr = []

    // Create working list of characters based on User Criteria UI checkboxes
    workingList = ''

    // set loop count from Range UI
    let loopCount = pwdLength.value
    

    // convert the nodelist to an array to parse with forEach
    checkboxes = Array.from(checkboxes)

    // look at each checkbox and add char set to working list if checked
    // add one char from each selected char set to make sure at least one char is present
    checkboxes.forEach(function (checkbox) {

        if (checkbox.checked) {
            if (checkbox.id === 'specialBox') {
                workingList += special
                getRandomChar(special)
                loopCount--


            } else if (checkbox.id === 'numericBox') {
                workingList += numeric
                getRandomChar(numeric)
                loopCount--

            } else if (checkbox.id === 'uppercaseBox') {
                workingList += uppercase
                getRandomChar(uppercase)
                loopCount--

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

    for(let j = resultArr.length - 1; j > 0; j--) {
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

// Event Handlers


// Generate Password Button Click
generateBtn.addEventListener('click', generate)

// Copy Password button Click
copyBtn.addEventListener('click', copyPassword)