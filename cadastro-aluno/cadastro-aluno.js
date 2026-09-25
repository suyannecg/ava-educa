import { Aluno } from "../js/Aluno.js"
import { cadastrarAluno } from "../js/alunos.js"

//recupera dados usuario
const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));

//exibe nome do usuario no cabeçalho
const nomeUsuario = document.getElementById('nome-usuario');
nomeUsuario.textContent = usuarioLogado.nome;

//redireciona para dashboard
const telaInicio = document.getElementById('tela-inicio');
telaInicio.addEventListener('click', function() {
 location.href = "../dashboard/dashboard.html";
});

//redireciona para cadastro de alunos
const cadastroAluno = document.getElementById('cadastrar-aluno');
cadastroAluno.addEventListener('click', function() {
 location.href = "./cadastro-aluno.html";
});

const campoNome = document.getElementById('nome-completo');
const campoGenero = document.getElementById('genero');
const campoCpf = document.getElementById('cpf');
const campoTelefone = document.getElementById('telefone');
const campoEmail = document.getElementById('email');
const campoNumero = document.getElementById('cep');
const campoComplemento = document.getElementById('complemento');
const formularioAluno = document.getElementById('formulario-aluno');
const campoDataNasc = document.getElementById('data-nasc');
const campoCep = document.getElementById('cep');
const campoCidade = document.getElementById('cidade');
const campoEstado = document.getElementById('estado');
const campoLogradouro = document.getElementById('logradouro');
const campoBairro = document.getElementById('bairro');

formularioAluno.addEventListener('submit', function(event) {
 event.preventDefault();
 const dataDigitada = campoDataNasc.value;
 const dataNascimento = moment(dataDigitada, 'DD/MM/YYYY', true);
 const dataMinima = moment('01/01/1990', 'DD/MM/YYYY', true);
 const dataAtual = moment();

 if (!dataNascimento.isValid()) {
  alert('Data inválida!')
 } else if (!dataNascimento.isAfter(dataMinima)) {
  alert('A data deve ser maior que 01/01/1990!')
 } else if(!dataNascimento.isBefore(dataAtual)) {
  alert('A data deve ser menor que a data atual!')
 } else {
  const aluno = new Aluno(
    campoNome.value,
    campoGenero.value,
    campoDataNasc.value,
    campoCpf.value,
    campoTelefone.value,
    campoEmail.value,
    campoCep.value,
    campoCidade.value,
    campoEstado.value,
    campoLogradouro.value,
    campoNumero.value,
    campoComplemento.value,
    campoBairro.value
  )

  cadastrarAluno(aluno)
    .then(function(sucesso) {
      alert(sucesso);
    })

    .catch(function(erro) {
      alert(erro);
    });
 }
});

campoCep.addEventListener('blur', function() {
 const cepDigitado = campoCep.value;
 const url = "https://viacep.com.br/ws/" + cepDigitado + "/json/";
 fetch(url)
  .then(function(resposta) {
   return resposta.json();
 })
  .then(function(dados) {
   campoCidade.value = dados.localidade;
   campoEstado.value = dados.uf;
   campoLogradouro.value = dados.logradouro;
   campoBairro.value = dados.bairro;
  });
})

//encerra sessao e retorna para login
const sairLogin = document.getElementById('sair-login');
sairLogin.addEventListener('click', function() {
 sessionStorage.removeItem('usuarioLogado');
 location.href = "../login/login.html";
});