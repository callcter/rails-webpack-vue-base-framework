<template>
  <div>
    这是{{page}}页面
    <img :src="avatar">
    <i class="icon iconfont icon-tixing"></i>
  </div>
</template>
<script>
  module.exports = {
    data: function(){
      return {
        page: 'about',
        avatar: require("../images/avatar.jpg")
      }
    }
  }
</script>