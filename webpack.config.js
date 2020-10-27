const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path: path.resolve(__dirname,'dist'),
    },

    devServer:{
        contentBase:path.join(__dirname,'./'),
        port:3200
    },
    module:{
        rules: [
            // {
            //   test: /\.js$/,
            //   exclude: /(node_modules)/,
            //   use: {
            //     loader: 'babel-loader',
            //     options: {
            //       presets: ['@babel/preset-env']
            //     }
            //   }
            // },
            // {
            //   test: /\.scss$/,
            //   use:[
            //     'style-loader',
            //     'css-loader',
            //     'sass-loader',
            //   ]
            // }
        ]
    },

}