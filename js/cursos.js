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

 //retorna somente cursos do usuario
 return cursosUsuario;

}