import { login } from "../js/auth.js"

// busca elementos usados no login
const campoEmail = document.getElementById('email-login');
const campoSenha = document.getElementById('senha-login');
const formulario = document.getElementById('formulario-login');
const invalido = document.getElementById('login-invalido');
const esqueceuSenha = document.getElementById('esqueceu-senha');

// aviso esqueceu senha
esqueceuSenha.addEventListener('click', function() {
 alert('Esta funcionalidade está em construção!')
});

// inicia validacao usuario
formulario.addEventListener('submit', function(event) {

 //impede recarregamento pagina
 event.preventDefault();

 const emailDigitado = campoEmail.value;
 const senhaDigitada = campoSenha.value;

 //verifica dados informados
 login(emailDigitado, senhaDigitada)
  .then(function(usuario) {
   //guarda dados do usuario durante sessao
  sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
  
  //encaminha usuario para dashboard
  location.href = "../dashboard/dashboard.html";
  })
  .catch(function(erro) {
   invalido.textContent = erro;
  });
  
})