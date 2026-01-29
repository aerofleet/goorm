window.onload = (() => {
    
    const inputField = document.getElementById('inputField');
    const generateButton = document.getElementById('generate');
    const outputArea = document.getElementById('output');

    generateButton.onclick = (() => {
        const num = parseInt(inputField.value);
        let result = '';
        for (let i = 1; i <= 9; i++) {
            result += `${num} x ${i} = ${num * i}\n`;
        }
        outputArea.textContent = result;
    });
});

