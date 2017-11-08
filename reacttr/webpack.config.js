const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
//como se van a transformar los cssModules, defino la nomeclatura del nombre final cuando babel haga la magia.
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

//Exporto un modulo
module.exports = {
    resolve: {
        //Indicamos las extensiones de los ficheros
        //que vamos a estar utilizando en nuestra aplicacion.
        //Y necesitamos que webpack este "vigilando"
        extensions: ['.js', '.jsx']
    },
    //Le indicamos el punto de entrada de la aplicacion
    entry: ['./src/index.jsx'],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, "build"),
        publicPath: '/'
    },
   
   //nos permite transpilar lenguajes,
   //En este caso ECMAScript 6 a ECMAScript 5 (que es el que entiende
   //los navegadores actuales.
    module: {
        loaders: [
            {   test: /(\.js|jsx)$/,
                exclude: path.resolve(__dirname + '/node_modules/'),
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ['react', 'latest']
                    }
                }] },
            { test: /\.css$/, loader: `style-loader!css-loader?${cssModules}` }
        ]
    },

    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },

    //digo donde debe exportar todos los modulos
    plugins: [
        new htmlWebpackPlugin({ template: './src/assets/index.html'}),
        new ExtractTextPlugin({filename: 'style.css',  allChunks: true })
    ]

}
