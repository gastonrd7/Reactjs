import fetch from 'isomorphic-fetch'

const baseUrl = 'https://ecommerce-api-a4661.herokuapp.com/api'

//creamos un cliente de api
const Api = {
    products: {
        // getAll: function getAll() {
        //     //vamos a utilizar las promesas pero utilizando async await
        // }
        async getAll:  function getAll(){
            //en ves de utilizar el fetch(`${baseUrl}/products`).then como promesa convencional
            //usamos el await que dice que cuando termine lo guarde en la constante response
            // para poder usar await debemos usar async delante de la funcion que estamos llamando
            // de esta forma podemos usar response como si fuese que ya tiene la respuesta,
            //queda el codigo mas estructurado y secuencial, se necesita el plugin state-2 para usarlo por el momento
            
            const response = await fetch(`${baseUrl}/products`)
            const data = await response.json()
            return data
        },
        async getSingle (id){
            const response = await fetch(`${baseUrl}/products/${id}`)
            const data = await response.json()
            return data
        },
        async save(item){
            const response = await fetch(`${baseUrl}/products`, {
                method: 'POST',
                headers: new headers({
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }),
                body: JSON.stringify(item)
            })

            const data = await response.json()
            return data
        }
    }
}

export default Api

//esto de aca seria el equivalente al getAll con async y await
// function getAll () {
//     fetch(`${baseUrl}/products`)
//     .then(function(response){
//         return response.json()
//     })//segunda promesa anidada
//     .then(function(data){
//         return data
//     })
// }

//Usando las arrow functions seria asi

// function getAll () {
//     fetch(`${baseUrl}/products`)
//     .then(respones => response.json())//segunda promesa anidada
//     .then(data => data)
// }