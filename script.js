const form = document.getElementById('survey-form');
form.insertAdjacentHTML('afterbegin', '<div id="progress-bar" style="height:3px;background:#3498db;width:0%;margin-bottom:10px;transition:width 0.3s"></div>');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const filled = [...inputs].filter(i => i.value).length;
        document.getElementById('progress-bar').style.width = `${(filled/inputs.length)*100}%`;
    });
});

//ANIMACAO FAKE PARA ENVIAR O FORMS

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit');
    btn.value = '✓ Enviado!';
    btn.style.backgroundColor = '#2ecc71';
    
    setTimeout(() => {
        form.reset();
        btn.value = 'Enviar';
        btn.style.backgroundColor = '#3498db';
        document.getElementById('progress-bar').style.width = '0%';
    }, 2000);
});