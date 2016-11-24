# archer-vue-toast
A toast component for qingcheng mobile project

![demo](http://zoneke-img.b0.upaiyun.com/ebcbe7a714e45e2b255aec6078eef0c4.jpeg)

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
vm.$toast({
    txt: 'upload error', //default: "error"
    transition: 'fadeup', //default: 'fade'
    time: 1000, //default: 2000ms
    style: {"margin-top": "200px"}
})
```

### Use options
```
/*
* @usage
* var VueToast = require('archer-vue-toast');
* Vue.use(VueToast, [options])
* options work on the toast Element, supporting txt, transition, time and style
*/
var VueToast = require('archer-vue-toast');
Vue.use(VueToast, {txt: "error", transition: "fadeup", time: 1000, style: {"margin-top": "150px"}});
```
