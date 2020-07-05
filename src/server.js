/** 
 * https://www.babeljs.cn/docs/babel-register
 * https://babeljs.io/docs/en/babel-preset-react#via-node-api
 */
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
})
const express = require('express');
const app = express();
const serverRouter = require('./serverRouter')
const apiRouter = require('./apiRouter')

app.use(express.static('build'));
app.use("/api/", apiRouter);
app.use("/", serverRouter);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
