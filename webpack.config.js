const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        annonces: './src/Module/Annonces/annonces.js',
        connexion: './src/Module/Connexion/connexion.js',
        dashboard: './src/Module/Dashboard/dashboard.js',
        feed: './src/Module/Feed/actionFeed.js',
        feed: './src/Module/Feed/newsFeed.js',
        inscription: './src/Module/Inscription/inscription.js',
        Modules: './src/Module/Modules/modules.js',
        presentation: './src/Module/Presentation/presentation.js',
        professeurs: './src/Module/Professeurs/professeurs.js',
        profile: './src/Module/Profile/profile.js',
        signup: './src/Module/Signup/signup.js',
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        hot: true,
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: false,
            errorDetails: false,
            warnings: false,
            publicPath: false
        },
    },

    output: {
        filename: './js/[name]/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader',
                ],
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon: './pngtitle.ico'
        })
    ]

};