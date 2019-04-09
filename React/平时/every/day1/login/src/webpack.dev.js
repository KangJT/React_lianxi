const path = require('path');
module.exports = {
    mode: "development",
    entry: {
        app: "../src/js/index.js"
    },
    output: {
        path: path.join(__dirname, './dest'),
        filename: "bundle.js"
    },
    module: {
        rules: [

            {
                test: /\.css/,
                use: [
                    'style-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 9081
    }
}