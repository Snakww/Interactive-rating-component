const telaAvaliacao = document.querySelector('.rating-state');
const telaFinal = document.querySelector('.thank-you-state');
const form = document.querySelector('.rating-form');


form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!document.querySelector('input[name="rating"]:checked')) {
        alert('Por favor, selecione uma nota antes de enviar.');
        return;
    }
     const avaliacaoSelecionada = document.querySelector('input[name="rating"]:checked');
    const nota = avaliacaoSelecionada.value;
    const textoNota = document.querySelector('.selected-rating span');
    textoNota.textContent = nota;

    telaAvaliacao.style.display = 'none';
    telaFinal.style.display = 'block';
})