// DOM VARIABLES

const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculatorKeys')
const calculatorDisplay = document.querySelector('.calculatorDisplay')

// EVEMTS

keys.addEventListener('click', e => {
  const key = e.target
  const action = key.dataset.action
  if (key.matches('button')) {
    if (!action) {
      updateDisplay(key.textContent)
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
  calculatorDisplay.textContent = 0
}
