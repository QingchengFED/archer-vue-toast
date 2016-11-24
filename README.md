# archer-vue-toast
A toast component for qingcheng mobile project

![demo](http://zoneke-img.b0.upaiyun.com/b7a63e2ef15a201d78bd0d53f429ef7b.jpeg)

## Usage

```JavaScript
var VueToast = require('archer-vue-toast');
Vue.use(VueToast);
```
### Basic use:

```JavaScript
/*
* @usage
* vm.$toast(options);
*/
vm.$confirm({
    txt: 'upload error', //default: "error"
    transition: 'fadeup', //default: 'fade'
    time: 1000 //default: 2000ms
}).
```
