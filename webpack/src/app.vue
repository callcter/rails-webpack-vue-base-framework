<template>
  <div class="wrapper">
    <div class="header">
      日新录
    </div>
    <div class="navigation">
      <router-link class="navigation__link current" to="/">
        <i class="icon iconfont icon-tuandui"></i>
        <span>首页</span>
      </router-link>
      <router-link class="navigation__link" to="/report">
        <i class="icon iconfont icon-tuandui"></i>
        <span>日报</span>
      </router-link>
      <router-link class="navigation__link" to="/square">
        <i class="icon iconfont icon-tuandui"></i>
        <span>广场</span>
      </router-link>
      <router-link class="navigation__link" to="/about">
        <i class="icon iconfont icon-tuandui"></i>
        <span>关于</span>
      </router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>