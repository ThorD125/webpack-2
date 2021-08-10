const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = (env, argv) => ({
    entry: [
        "./assets/js/main.js",
        "./assets/scss/_main.scss"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundled.js",
    },
    module: {
        rules: [{
                test: /\.txt$/,
                use: "raw-loader"
            },
            {
                test: /\.scss$/,
                use: [
                argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    // Run postcss actions
                    loader: 'postcss-loader',
                    options: {
                      // `postcssOptions` is needed for postcss 8.x;
                      // if you use postcss 7.x skip the key
                      postcssOptions: {
                        // postcss plugins, can be exported to postcss.config.js
                        plugins: function () {
                          return [
                            require('precss'),
                            require('autoprefixer')
                          ];
                        }
                      }
                    }
                  },
                "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                },
                {loader: "css-loader"},
                {loader: "postcss-loader"}
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "url-loader",
                options: {
                    name: "[path][name].[ext]",
                }
            },
            {
                test: /\.(mp4|svg|png|jpe?g|gif)$/,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                }
            },
            {
                test: /\.(mp3)$/,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                }
            },
        ],
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./[name].css",
        }),
        new HtmlWebpackPlugin({
            title: "DEFAULT PROJECT FOLDER",
            template: "index.html",
            hash: true,
        }),
        new StylelintPlugin({
            fix: true,
            files: './assets/**/*.s?(a|c)ss'
        }),
        new BrowserSyncPlugin({
            port: 3000,
            server: {
                baseDir: ["dist"]
            },
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery"
        })
    ],
});