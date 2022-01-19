var path = require('path');
const fs = require('fs');

//const shared = ['react'];
const fileNames = fs.readdirSync('./src/components').reduce((acc, v) => ({ ...acc, [v]: `./src/components/${v}/${v}.tsx` }), {});
//fileNames.push('./src/mapping.json');
fileNames['mapping'] = './src/mapping.js';
//fileNames['shared'] = shared;
console.log(fileNames);

module.exports = {
    mode: 'production',
    entry: fileNames,
    //fileNames,
    // {
    //         BasicInput: './src/components/BasicInput/index.tsx',
    //         BoilerplateComponent: './src/components/BoilerplateComponent/index.tsx',
    // },
    //'./src/components/index.tsx',
    output: {
        path: path.resolve('dist'),
        publicPath: "",
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "all",
    //         name: "shared"
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                noEmit: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                // use: [
                //     { loader: 'url-loader' },
                //     {
                //         loader: 'file-loader',
                //         options: {
                //             name: '[name].[ext]',
                //             outputPath: 'images'
                //         }
                //     }
                // ]
                loaders: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: "assets/img/",
                    publicPath: '../img/'
                }

                // use: [
                //     {
                //         loader: 'url-loader',
                //         options: {
                //             limit: 8192, // return DataURL if image size <= 8KB
                //             fallback: 'file-loader' // use file loader for size > 8KB
                //         }
                //     },
                // ],
            }
        ]
    },
    resolve: {
        alias: {
          '@img': path.resolve(__dirname, 'dist/assets/img'),
          '@': path.resolve(__dirname, 'dist')
        },
        modules: [
          'node_modules',
          path.resolve(__dirname, 'dist')
        ]
      },
}