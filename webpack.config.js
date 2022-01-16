const path = require(`path`);

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname),
        filename: `main.js`
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /\.s?css$/i,
            use: ["style-loader", "css-loader", `sass-loader`],
        },
    
    
    ],
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname),
        },
        compress: true,
        port: 9000,
    },
    
}