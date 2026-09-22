//recupera dados do usuario
const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));

//mostra nome do usuario no cabecalho
const nomeUsuario = document.getElementById('nome-usuario');

nomeUsuario.textContent = usuarioLogado.nome;