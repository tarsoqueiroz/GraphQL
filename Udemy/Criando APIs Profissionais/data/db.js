const perfis = [
  { id: 1, nome: 'comum' },
  { id: 2, nome: 'administrador' },
]

const usuarios = [{
  id: 1,
  nome: 'João Silva',
  email: 'joaosilva@gmail.com',
  idade: 29,
  perfil_id: 1,
  status: 'ATIVO'
},{
  id: 2,
  nome: 'Rafael Junior',
  email: 'rafaeljr@mail.com',
  idade: 31 ,
  perfil_id: 2,
  status: 'INATIVO'
},{
  id: 3,
  nome: 'Daniela Smith',
  email: 'd.smith@tmail.com',
  idade: 24,
  perfil_id: 1,
  status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis }
