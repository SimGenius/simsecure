module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './dist/bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
        // loaders: [
        //     { test: /\.ts$/, loader: 'ts-loader' }
        // ]
    }, resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
}

// const path = require('path');

// module.exports = {
//     entry: './src/index.ts',
//     devtool: 'inline-source-map',
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/
//             }, {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             },
//         ]
//     },
//     devServer: {
//         contentBase: './dist'
//     },
//     resolve: {
//         extensions: ['.tsx', '.ts', '.js']
//     },
//     output: {
//         filename: './dist/bundle.js',
//         // path: path.resolve(__dirname, 'dist')
//     }
// };