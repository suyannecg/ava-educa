import { login } from "../js/auth.js"

// busca elementos usados no login
const campoEmail = document.getElementById('email-login');
const campoSenha = document.getElementById('senha-login');
const formulario = document.getElementById('formulario-login');
const invalido = document.getElementById('login-invalido');
const esqueceuSenha = document.getElementById('esqueceu-senha');

// aviso esqueceu senha
esqueceuSenha.addEventListener('click', function () {
 alert('Esta funcionalidade está em construção!')
});

// inicia validacao usuario
formulario.addEventListener('submit', function (event) {

 //impede recarregamento pagina
 event.preventDefault();

 const emailDigitado = campoEmail.value;
 const senhaDigitada = campoSenha.value;

 //verifica cadastro atraves de dados informados
 const resultado = login(emailDigitado, senhaDigitada);

 if (resultado !== false) {

  //guarda dados do usuario durante sessao
  sessionStorage.setItem('usuarioLogado', JSON.stringify(resultado));
  
  //encaminha usuario para dashboard
  location.href = "../dashboard/dashboard.html";

 } else {
  invalido.textContent = 'Dados incorretos. Verifique e tente novamente.'
 }
})