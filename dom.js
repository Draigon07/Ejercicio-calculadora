//Use parseInt to transform a number to string

const result = document.getElementById('result');
const btnNum = document.querySelectorAll('.cal_button');
const opBtn = document.querySelectorAll('.op_btn')
const deleteBtn = document.querySelector('.delete_btn');
const sumBtn = document.querySelector('.plus_btn');
const restBtn = document.querySelector('.rest_btn')
const divBtn = document.querySelector('.div_btn');
const multBtn = document.querySelector('.mul_btn');
const equal = document.querySelector('.equal_btn')
let answer1 = '';
let answer2 = ''
let fAnswer = '';



const innerNum = (el)=>{
    el.forEach(num =>{
        console.log(num.textContent);
        num.addEventListener('click',()=>{
            answer1 += num.textContent;
            console.log(answer1)
            result.innerText = answer1;
        })
        
        
        deleteBtn.addEventListener('click',()=>{
            result.textContent = '';
            answer1 = '';
            answer2 = ''
        })
    })

    sumBtn.addEventListener('click',()=>{
            answer1 += sumBtn.textContent;
            console.log(answer1)
            result.innerText = answer1;
            sum(answer1,answer1)
    })
} 

innerNum(btnNum)




const sum = (num1,num2)=>{
    let op = num1 + num2;
    return op
}

const res = (num1,num2)=>{
    let op = num1 - num2;
    return op
}


const div = (num1,num2)=>{
    let op = num1 / num2;
    return op
}

const mult = (num1,num2)=>{
    let op = num1 * num2;
    return op
}













/*const btn = document.querySelector('.button_container')
btn.addEventListener('click',function(event){
    alert(`You clicked on button ${event.target.innerText}`)      //Target is where the event happened
    event.target.innerText = 'Hi'
})*/
