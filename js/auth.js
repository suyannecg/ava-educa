//importa lista de usuarios cadastrados no sistema
import { usuarios } from "../dados/listagem-usuarios.js"

//verifica se o usuário e senha pertencem a um usuario cadastrado
export function login(usuario, senha) {

 //percorre lista de usuarios cadastrados
 for(let i = 0; i < usuarios.length; i++) {
  usuarios[i]

  //compara usuario e senha informados com dados da lista
  if (usuario === usuarios[i].email && senha === usuarios[i].senha) {

   //se corretos, retorna usuario encontrado
   return usuarios[i];
  }
 }

 //se nenhum usuario encontrado, informa login invalido
 return false;
}

