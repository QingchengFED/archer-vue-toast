<template lang="html">
  <div class="g-layerWrap" :transition="transition" v-if="show">
      <div class="m-toast" :style="style">
          <p class="txt">{{txt}}</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>
<style>
  @import "media_query.less";
</style>

<style lang="less" scoped>
  @import "toast.less";
</style>
