
function GeradorSenha(){
 let comprimento =document.getElementById('tamanho').value;
let contem = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_0123456789.'
let senha = '';
for( let i = 0; i < comprimento; i++){

let aletorio_index = Math.floor(Math.random() * contem.length)

senha += contem[aletorio_index];


document.getElementById("gerada_senha").innerHTML =senha;
}

}

