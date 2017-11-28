//vamos a utilizar store para desarrollo y produccion diferentes.
//los midelware son utiles para desarrollo, pero para produccion no son necesarios.
if(process.env.NODE_ENV === 'production'){
    module.exports = require('./configureStore.prod')
} else {
    module.exports = require('./configureStore.dev')
}