const db = require('../../config/db')

module.exports = {
    async perfis() {
        return db('perfis')
    },
    async perfil(_, { filtro }) {
        // implementar
    }
}