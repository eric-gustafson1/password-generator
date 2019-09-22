const special = '!@#$%^&*()'
const numeric = '1234567890'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'

let pwdResult = document.getElementById('password')

let resultArr = []


function getRandomChar(list) {
    console.log(list)
    resultArr.push(list[Math.floor(Math.random() * list.length)])
}

getRandomChar(special)
getRandomChar(numeric)
getRandomChar(uppercase)
getRandomChar(lowercase)

console.log(resultArr.join(''))
resultArr = resultArr.join('')

pwdResult.textContent = resultArr
