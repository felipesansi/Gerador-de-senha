function GeradorSenha() {
    let comprimento = document.getElementById('tamanho').value;
    if(comprimento===""){
        alert("Coloque um número ")
    }else{
   
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_0123456789.';
    let senha = '';

    for (let i = 0; i < comprimento; i++) {
        let aleatorio_index = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[aleatorio_index];
    }

    document.getElementById("gerada_senha").value = senha;
}
}
 function CopiarSenha(){
   let senha_gerada =document.getElementById("gerada_senha");
   senha_gerada.select();
   senha_gerada.setSelectionRange(0, 99999);
  document.execCommand("copy");
   alert("Senha copiada: " + senha_gerada.value);
 }
