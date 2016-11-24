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
      this.$toast({txt: 'fadeup', transition: 'fadeup'})
    },
    showQuickToast () {
      this.$toast({txt: 'disappear after 1s', time: 1000})
    }
  }
})
