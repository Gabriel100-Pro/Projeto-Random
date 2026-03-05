

function numerosorteado(){
    const minimo = Math.ceil(document.getElementById("min").value);
    const maximo = Math.floor(document.getElementById("max").value);
    const banner = document.getElementById("banner");
    const spinner = document.getElementById("spinner");
    const mensagem = document.getElementById("mensagem");
    const valorSorteado = document.getElementById("valor-sorteado");
if (maximo <=  minimo){
        alert("O valor máximo deve ser maior que o valor mínimo.");
        return false;
}else{
        const resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        valorSorteado.textContent = resultado;
}
    banner.style.display = "flex";
    mensagem.style.display = "block";
    spinner.style.display = "block";

    // Simula tempo de download
    setTimeout(() => {
      mensagem.textContent = "Download realizado com sucesso!";
      spinner.style.display = "none";

      // Esconde o banner depois de 3 segundos
      setTimeout(() => {
        banner.style.display = "none";
      }, 3000);

    }, 3000);
  }

  function fecharBanner() {
    const banner = document.getElementById("banner");
    const spinner = document.getElementById("spinner");
    

    spinner.style.display = "none";
    banner.style.display = "none";
}
const buttonbanner = document.querySelector(".buttonbanner");
buttonbanner.addEventListener("click", fecharBanner);

 sorteio.addEventListener("click", numerosorteado); 

numerosorteado();

