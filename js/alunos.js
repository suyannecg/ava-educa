import { alunos } from "../dados/listagem-alunos.js"

export function cadastrarAluno(aluno) {

 if (aluno) {
  const novoId = alunos.length +1
 aluno.id = novoId;

 alunos.push(aluno);

 return Promise.resolve('Aluno cadastrado com sucesso!');
 } else {
  return Promise.reject('Erro ao cadastrar o aluno')
 }
}