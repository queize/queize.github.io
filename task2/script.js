document.querySelector('#consolelog').addEventListener('click', 
    (event) => {
        alert('Метод для выполнения консольных команд в web-браузере');
})

document.querySelector('#alert').addEventListener('click', 
    (event) => {
        alert('Метод для alert() ')
    }
)

document.querySelector('#prompt').addEventListener('click', 
    (event) => {
        alert('Метод для prompt() ')
    }
)