const input1=document.querySelector('#email');
const input2=document.querySelector('#email2');
const button1=document.querySelector('.button-1');
const button2=document.querySelector('.button-2');

function error(input){
    input.className='invalid';
    const div=input.nextElementSibling;
    div.innerText='Please check your email';
    div.className='invalid-feedback';
}
function succes(input){
    input.className='';
    const div=input.nextElementSibling;
    div.innerText='';
    div.className='invalid-feedback';
}

const validateEmail = (input1) => {
    return String(input1)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

button1.addEventListener("submit",function(e){
    e.preventDefault();
    if(!validateEmail(input1.value)){
        error(input1);
    }else{
        succes(input1)
    }
})
button2.addEventListener("submit",function(e){
    e.preventDefault();
    if(!validateEmail(input2.value)){
        console.log("salam");
        error(input2);
        
    }else{
        succes(input2)
    }
})
