var path = require("path");
var webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebPack = require("html-webpack-plugin");

module.exports = {
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        path:path.join(__dirname,"./dist/"),
        filename:"bundle.js"
    },
    plugins:[
       new webpack.HotModuleReplacementPlugin(),
       new VueLoaderPlugin(),
       new HtmlWebPack({
           template:path.join(__dirname,"./src/index.html"),
           filename:"./index.html"
       }) 

    ],
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.(jpg|png|gif|ttf|svg)/,use:"url-loader"},
            {test:/\.vue$/,use:"vue-loader"}
        ]
    },
    devServer:{
        open:true,//打开浏览器
        port:3000,//端口
        contentBase:"src",//托管的根目录
        hot:true,
        // host:"192.168.1.100"
    }

}