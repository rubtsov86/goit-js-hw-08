import throttle from "lodash.throttle";

const STORAGE_KEY = 'inputData';

const formRef = document.querySelector('form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');

if (localStorage.getItem(STORAGE_KEY)) {
    inputRef.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    textareaRef.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
}

formRef.addEventListener('input', throttle(onTextareaInput, 500));
formRef.addEventListener('submit', onFormSubmit);




function onFormSubmit(e) {
    e.preventDefault();
    if (!inputRef.value || !textareaRef.value) {
        alert('все поля формы должны быть заполнены');
        return
    }
    
    resetForm(e);
    
}

function onTextareaInput(e) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ "email": inputRef.value, "message": textareaRef.value }));
    
}


function resetForm(e) {
    e.target.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    localStorage.removeItem(STORAGE_KEY);
}
