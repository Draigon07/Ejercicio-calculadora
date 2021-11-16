//Use parseInt to transform a number to string

let runningTotal = 0;
let buffer = "0";
let previusOperator = null;
const screen = document.querySelector('.screen')


document.querySelector('.calc_buttons').addEventListener('click',function(e){
    buttonClick(e.target.innerText)  
})


const buttonClick = (value)=>{
    console.log(value)
    if(isNaN(parseInt(value))){
        handleSymbol(value)
    }else{
        handleNumber(value)
    }

    writeOnScreen()

}

const  writeOnScreen = ()=>{
    screen.innerText = buffer;
}

const handleNumber = (value) =>{
    if(buffer === "0"){
        buffer = value;
    }else{
        buffer += value;
        console.log(buffer)
    }
}


const handleSymbol = (value)=>{
    switch (value){
        case "C":
            buffer = "0"
            runningTotal = 0;
            previusOperator = null;
            break;
        case "=":
            if(previusOperator === null){
                return;
            }
            flushOperation(parseInt(buffer))
            previusOperator = null;
            buffer = "" + runningTotal
            runningTotal = 0
            break; 

        case "←":
            if(buffer.length === 1){
                buffer = '0'
            }else{
                buffer = buffer.substring(0, buffer.length - 1)
            }
            break;
            default:
                handleMath(value);
                break
        }
}


const handleMath = (value)=>{
    const inBuffer = parseInt(buffer);
    if(runningTotal === 0){
        runningTotal = inBuffer
    }else{
        flushOperation(inBuffer)
    }
    
    previusOperator = value
    buffer = '0'
}

const flushOperation = (intBuffer)=>{
    if(previusOperator === '+'){
        runningTotal += intBuffer;
    }else if(previusOperator === "-"){
        runningTotal -= intBuffer
    }else if(previusOperator === "X"){
        runningTotal *= intBuffer
    }else{
        runningTotal /= intBuffer
    }

}










