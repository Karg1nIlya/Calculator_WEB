let formula = ''

function updateInput(){
    size = formula.length-1
    console.log(formula)
    console.log(formula[size])
    if(formula == ''){
        document.getElementById('input_num').value = '0'
    }
    else{
        document.getElementById('input_num').value = formula
    }
}

function addOperation(opearation){
    size = formula.length-1
    if(formula[size] != '.' && formula[size] != '*' && formula[size] != '+' && formula[size] != '-' && formula[size] != '/'){
        formula += opearation
    }
    else {
        let newformula = ""
        for(let i = 0; i<size; i++){
            newformula += formula[i]
        }
        formula = newformula + opearation
    }
    updateInput()
}

function calcResult(){
    try {
        let res = String(eval(formula))
        document.getElementById('input_num').value = res
        formula = res
    } 
    catch (e) {
        formula = ''
        document.getElementById('input_num').value = 'ОШИБКА'
    }
}

function clearInput(){
    if(document.getElementById('key_ac').innerText == 'C'){
        document.getElementById('key_ac').innerText = 'AC'
    }
    formula = ''
    updateInput()
}

function addNumber(num){
    if(num === '0' && formula === ''){
        formula = ''
    }
    else{
        document.getElementById('key_ac').innerText = 'C'
        formula+=num
    }
    updateInput()
}

function sign(){
    if(formula!='')
        formula = String(eval(formula)*(-1))
    updateInput()
}

function percent(){
    if(formula!='')
        formula = String(eval(formula)*0.01)
    updateInput()
}