// DOM VARIABLES

const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculatorKeys')
const calculatorDisplay = document.querySelector('.calculatorDisplay')

// EVENTS
let arrayOfNumbers = []

keys.addEventListener('click', e => {
  e.preventDefault()
  const key = e.target
  const action = key.dataset.action

  if (key.matches('button')) {
    if (!action) {
      joinNumbers(key)
    }

    switch (action) {
      case 'clear':
        resetDisplay()

        break
    }
  }
})

// FUNCTION TO UPDATE THE VALUES IN DISPLAY CALCULATOR

function updateDisplay(valueOfKey) {
  calculatorDisplay.textContent = valueOfKey
}

// FUNCTION TO RESET DISPLAY

function resetDisplay() {
  arrayOfNumbers = []
  calculatorDisplay.textContent = 0
}

// FUNCTION TO JOIN NUMBERS

function joinNumbers(key) {
  arrayOfNumbers.push(key.textContent) // ADD THE VALUE OF KEY PRESSED INTO ARRAY
  const stringOfNumbers = arrayOfNumbers.join('') // JOIN ALL THE NUMBERS IN ARRAY (IT TRANSFORMS THE NUMBERS IN A STRING)
  const convertedString = parseInt(stringOfNumbers) // CONVERT THE STRING IN A NUMBER
  updateDisplay(convertedString)
}
