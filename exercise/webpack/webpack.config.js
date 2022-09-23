const path = require('path');

module.exports = {
    mode: 'development', // or production
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),

    },

    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'app.[contenthash].js',
       clean: true
    }
}