import { listarCursos } from "../js/cursos.js"

//recupera dados do usuario
const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));

const listaCursos = document.getElementById('lista-cursos');

//busca cursos do usuario
listarCursos(usuarioLogado)
 .then(function(cursosUsuario) {

  //percore cursos encontrados
 for (let i = 0; i < cursosUsuario.length; i++) {

  //cria infos do curso
  const card = document.createElement('article');

  const tituloCurso = document.createElement('h2');
  tituloCurso.textContent = cursosUsuario[i].nomeCurso;

  const inicioCurso = document.createElement('p');
  inicioCurso.textContent = 'Data de Início: ' + cursosUsuario[i].dataInicio;

  const fimCurso = document.createElement('p');
  fimCurso.textContent = 'Data de Fim: ' + cursosUsuario[i].dataFim;

  //adiciona informacoes ao card
  card.appendChild(tituloCurso);
  card.appendChild(inicioCurso);
  card.appendChild(fimCurso);

  //adiciona card a lista de cursos
  listaCursos.appendChild(card);
 }
})

  .catch(function(erro) {
   alert(erro);
  })


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