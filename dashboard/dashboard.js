//recupera dados do usuario
const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));

//mostra nome do usuario no cabecalho
const nomeUsuario = document.getElementById('nome-usuario');

nomeUsuario.textContent = usuarioLogado.nome;

//redireciona para dashboard
const telaInicio = document.getElementById('tela-inicio');
telaInicio.addEventListener('click', function() {
 location.href = "./dashboard.html";
});

//redireciona para cadastro de alunos
const cadastroAluno = document.getElementById('cadastrar-aluno');
cadastroAluno.addEventListener('click', function() {
 location.href = "../cadastro-aluno/cadastro-aluno.html";
});

//encerra sessao e retorna para login
const sairLogin = document.getElementById('sair-login');
sairLogin.addEventListener('click', function() {
 sessionStorage.removeItem('usuarioLogado');
 location.href = "../login/login.html";
});