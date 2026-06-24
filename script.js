function calcular(){

let ha =
Number(document.getElementById("ha").value);

let kg =
Number(document.getElementById("kg").value);

let preco =
Number(document.getElementById("preco").value);

let receita = ha * kg * preco;

document.getElementById("resultado")
.innerHTML =
"Receita estimada: R$ " +
receita.toLocaleString("pt-BR");
}

function quiz(correta){

let texto =
document.getElementById("quizResultado");

if(correta){

texto.innerHTML =
"🏆 Correto! O gotejamento economiza água.";

texto.style.color = "green";

}else{

texto.innerHTML =
"❌ Resposta incorreta.";

texto.style.color = "red";

}
}

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

if(
sec.getBoundingClientRect().top
<
window.innerHeight-100
){
sec.classList.add("active");
}

});

});
