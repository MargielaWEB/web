document.querySelector('.buttons').onclick = click
let userValue = ''

function isSymbol(char){
    return(char == '+' || char == '-' || char == '/' || char == '*')
}

function isNumber(value) {
    return(value.includes('+') || value.includes('-') || value.includes('/') || value.includes('*'))
}

function isNumberPoint(value) {
    return((value.includes('-') && value.charAt(0)!='-') || value.includes('/') || value.includes('*'))
}

function click(event){
    let target = event.target
    if(target.classList.contains('number')){
        userValue += target.innerHTML
    }
    if(target.classList.contains('symbol')){
        if(isSymbol(userValue.slice(-1))){
            userValue = userValue.slice(0, -1)
        }
        userValue += target.innerHTML
    }
    if(target.classList.contains('answer') && userValue){
       userValue = eval(userValue).toString() 
    }
    if(target.classList.contains('eraser')){
        userValue = ''
     }
    if(isSymbol(userValue)){
        userValue = ''
    }
    console.log(target.classList.contains('changer'), Number.isFinite(userValue))
    if(target.classList.contains('changer') && !isNumber(userValue)){
        userValue = (-userValue).toString()
     }

    if(target.classList.contains('percentages') && !isNumber(userValue)){
        userValue = (userValue / 100).toString()
     }

    if(target.classList.contains('point') && !isNumberPoint(userValue)){
        userValue = userValue + '.'
    }


    document.querySelector('.input').value = userValue
}

