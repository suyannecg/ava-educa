import { alunos } from "../dados/listagem-alunos.js"

export function cadastrarAluno(aluno) {

 //verifica recebimento de dados do aluno
 if (aluno) {

  //cria id para o aluno
  const novoId = alunos.length + 1
 aluno.id = novoId;

 //adiciona aluno a lista de alunos
 alunos.push(aluno);

 return Promise.resolve('Aluno cadastrado com sucesso!');
 } else {
  return Promise.reject('Erro ao cadastrar o aluno')
 }
}