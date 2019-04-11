const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  mode:'development',//模式：production/development
  devServer:{
    port:3000
  },
  entry: './src/index.js',
  output: {//出口
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'build')
  },//导出一个对象，包含两个属性，output里面又是一个对象；
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack',
      template:'./src/index.html',
      hash:'true',
      minify:{
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
        removeAttributeQuotes:true
      }
    })
  ],
  module: {//添加css文件
    rules: [
      {
        test:/\.css$/,
        use:[
          {loader:'style-loader',
          options:{
            insertAt:'top'
          }//使index.HTML的style效果最强；
        },
          'css-loader' 
          //'css-loader'],
        //loader匹配的顺序是从右往左或者从下往上
    ]},
    {
      test:/\.less$/,
      use:[
        {
        loader:'style-loader',
        options:{
          insertAt:'top'
        }
      },
      'css-loader',
      'less-loader' 
    ]},
  ]}
}  
//-配置package.json