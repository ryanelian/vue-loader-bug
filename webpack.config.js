// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            // webpack: Error: [VueLoaderPlugin Error] No matching use for vue-loader is found.
            // Make sure the rule matching .vue files include vue-loader in its use.     
            {
                test: /\.html?$/,
                loader: 'html-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // if html-loader is set AFTER vue-loader, no error:
            // {
            //     test: /\.html?$/,
            //     loader: 'html-loader'
            // }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
