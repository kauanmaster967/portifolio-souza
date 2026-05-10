
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const descricao = document.getElementById("descricao").value;

    // VERIFICA CAMPOS VAZIOS

    if(nome === "" || email === "" || descricao === ""){
        alert("Preencha todos os campos!");
        return;
    }

    // VALIDAÇÃO DO EMAIL

    if(!email.includes("@") || !email.includes(".")){
        alert("Digite um email válido!");
        return;
    }

    // MENSAGEM DE SUCESSO

    alert("Orçamento enviado com sucesso!");

    // LIMPA OS CAMPOS

    formulario.reset();

});