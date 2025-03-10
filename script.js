const calculator = document.querySelector(‘.calculator’)
const keys = calculator.querySelector(‘.calculator__keys’)

keys.addEventListener(‘click’, e => {
 if (e.target.matches(‘button’)) {
   // Fazer algo
 }
})
const key = e.target
const action = key.dataset.action
if (!action) {
  console.log('number key!')
}
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  console.log('operator key!')
}
if (action === 'decimal') {
  console.log('decimal key!')
}

if (action === 'clear') {
  console.log('clear key!')
}

if (action === 'calculate') {
  console.log('equal key!')
}
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...
  }
})
if (!action) {
  if (displayedNum === '0') {
    display.textContent = keyContent
  }
}
if (!action) {
  if (displayedNum === '0') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}
if (action === 'decimal') {
  display.textContent = displayedNum + '.'
}
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  key.classList.add('is-depressed')
}
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    // ...
    
    // Remove a classe .is-depressed de todas as teclas
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
  }
})
const calculator = document.querySelector('.calculator')
// ...

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // ...
    
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      // Adiciona um atributo personalizado
      calculator.dataset.previousKeyType = 'operator'
    }
  }
})
const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}
if (action === 'calculate') {
  const secondValue = displayedNum
  // ...
}
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  // ...
  calculator.dataset.firstValue = displayedNum
  calculator.dataset.operator = action
}
if (action === 'calculate') {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  
  display.textContent = calculate(firstValue, operator, secondValue)
}
const calculate = (n1, operator, n2) => {
  // Realizar um cálculo e retornar o valor calculado
}
const calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = n1 + n2
  } else if (operator === 'subtract') {
    result = n1 - n2
  } else if (operator === 'multiply') {
    result = n1 * n2
  } else if (operator === 'divide') {
    result = n1 / n2
  }
  
  return result
}
const calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  
  return result
}
// Exemplo do funcionamento de includes.
const string = 'The hamburgers taste pretty good!'
const hasExclamation = string.includes('!')
console.log(hasExclamation) // true
// Não fazer nada se a string já tiver um ponto
if (!displayedNum.includes('.')) {
  display.textContent = displayedNum + '.'
}
if (!action) {
  // ...
  calculator.dataset.previousKey = 'number'
}

if (action === 'decimal') {
  // ...
  calculator.dataset.previousKey = 'decimal'
}

if (action === 'clear') {
  // ...
  calculator.dataset.previousKeyType = 'clear'
}

if (action === 'calculate') {
 // ...
  calculator.dataset.previousKeyType = 'calculate'
}

if (action === 'decimal') {
  if (!displayedNum.includes('.')) {
    display.textContent = displayedNum + '.'
  } else if (previousKeyType === 'operator') {
    display.textContent = '0.'
  }
  
calculator.dataset.previousKeyType = 'decimal'
}
if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  
// Obs: basta verificar firstValue e o operador, pois o secondValue existe sempre
  if (firstValue && operator) {
    display.textContent = calculate(firstValue, operator, secondValue)
  }
  
key.classList.add('is-depressed')
  calculator.dataset.previousKeyType = 'operator'
  calculator.dataset.firstValue = displayedNum
  calculator.dataset.operator = action
}