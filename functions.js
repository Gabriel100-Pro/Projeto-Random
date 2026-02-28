function sortear(){
    const minimo = Math.ceil(document.getElementById("min").value);
    const maximo = Math.floor(document.getElementById("max").value);
    const resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    alert(`Número sorteado: ${resultado}`);
}