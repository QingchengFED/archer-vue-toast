import toastOptions from "./toast.vue"

export default {
  install (Vue, options = {}) {
    var toastConstructor = Vue.extend(toastOptions),
      toastInstance = null;

    Vue.prototype.$toast = function (config = {}) {
      toastInstance = new toastConstructor({
        el: document.createElement('div'),
        data () {
          return {
            txt: config.txt || options.txt || 'error',
            time: config.time || options.time || 2000,
            transition: config.transition || options.transition || 'fade',
            style: config.style || options.style || {},
            show: !1
          }
        },
        methods: {
          showToast () {
            this.show = !0;
          },
          hideToast () {
            this.show = !1;
            this.$nextTick(function () {
              toastInstance = null;
            })
          }
        },
        created () {
          var _self = this;
          this.showToast();
          var timer = setTimeout(function () {
            _self.hideToast();
            timer = null;
          }, _self.time);
        }
      });
      
      document.body.appendChild(toastInstance.$el);
    }

  }
}
