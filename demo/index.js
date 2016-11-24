import toast from '../dist/index'

Vue.use(toast);

new Vue({
  el: 'body',
  data () {
    return {

    }
  },
  methods: {
    showDefaultToast () {
      this.$toast();
    },
    showFadeupToast () {
      this.$toast({txt: '向上渐隐', transition: 'fadeup'})
    },
    showQuickToast () {
      this.$toast({txt: '1s后消失', time: 1000})
    }
  }
})
