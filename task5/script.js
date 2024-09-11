const buttonSubmit = document.querySelector('button');
const inputForm = document.querySelector('input');
const pDubplicated = document.querySelector('#duplicateField');


buttonSubmit.addEventListener('click', 
    (event) => {
        event.preventDefault();
        console.log(inputForm.value);
        inputForm.value = '';
        pDubplicated.textContent = '';
    }
);

inputForm.addEventListener('keyup', 
    (event) => {
        event.preventDefault();
        pDubplicated.textContent = event.target.value;        
    }
)

