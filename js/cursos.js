import { cursos } from "../dados/listagem-cursos.js"

export function listarCursos(usuario) {

 //guarda cursos encontrados no usuario
 const cursosUsuario = [];

 //percorre e verifica cursos do usuario
 for (let i = 0; i < cursos.length; i++) {
  if (cursos[i].emailProfessor === usuario.email) {
   cursosUsuario.push(cursos[i]);
  }
 }

 //verifica se encontrou cursos
 if (cursosUsuario.length > 0) {
  return Promise.resolve(cursosUsuario);
 } else {
  return Promise.reject('Não há cursos cadastrados para esse usuário');
 }

}