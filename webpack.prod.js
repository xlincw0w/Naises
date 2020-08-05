const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        // annonces: './src/Module/Annonces/annonces.js',
        // connexion: './src/Module/Connexion/connexion.js',
        // dashboard: './src/Module/Dashboard/dashboard.js',
        // inscription: './src/Module/Inscription/inscription.js',
        // Modules: './src/Module/Modules/modules.js',
        // presentation: './src/Module/Presentation/presentation.js',
        // professeurs: './src/Module/Professeurs/professeurs.js',
        // profile: './src/Module/Profile/profile.js',
        // signup: './src/Module/Signup/signup.js',
    },

    output: {
        filename: './js/[contentHash].js',
        path: path.resolve(__dirname, 'dist'),
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
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'assets'
                    }
                }

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'assets'
                    }
                }
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
    ],

    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },

};