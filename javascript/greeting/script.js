window.onload = (() => {
    
    const inputField = document.getElementById('inputField');
    const generateButton = document.getElementById('generate');
    const outputArea = document.getElementById('output');

    generateButton.onclick = (() => {
        const name = inputField.value;
        const result = `Hello, ${name}!`;
        outputArea.innerHTML = `<h2>${result}</h2>`;
    });
    inputField.onkeydown = (e) => {
        if(e.key === 'Enter') generateButton.onclick();
    };
    
});

