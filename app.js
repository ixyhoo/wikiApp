// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

const form = document.querySelector('form');
const input = document.querySelector('input');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit',handleSubmit) 

function handleSubmit(e){
    e.preventDefault();
    
    if(input.value === ""){
        errorMsg.textContent = 'Please enter a search term';
        return;
    }
}