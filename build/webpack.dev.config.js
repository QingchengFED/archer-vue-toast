/**
 * User: yxp-qingcheng
 * Date: 16/11/24
 * Time: 下午3:47
 */
var config = require('./webpack.base.config');

config.entry = './demo';

config.output = {
    filename: './demo/dist/index.js',
    publicPath: '/'
};


module.exports = config;
