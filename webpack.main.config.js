const path = require('path');

module.exports = {
    entry: {
        main: './src/main/main.ts',
        preload: './src/main/preload.js'
    },
    target: 'electron-main',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    }
}
