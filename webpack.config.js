const path = require(`path`);

module.exports = (env) => {

    return{
        mode: 'production' ,
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


            ]},
        devtool:'source-map',
        
        devServer: {
            historyApiFallback: true,
            static: {
                directory: path.join(__dirname),
            },
            compress: true,
            port: 9000,
        },
    }
}
