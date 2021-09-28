const textArea = document.querySelector('.text-area');
const parrafo = document.querySelector('.paragraph');


textArea.addEventListener('input', (text) => {
    const target = text.target;
    let cantidad = target.value.length;

    parrafo.innerHTML = `Cantidad de caracteres: ${cantidad}`;

})
