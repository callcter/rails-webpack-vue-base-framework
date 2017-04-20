module.exports = {
  routes: [
    {
      path: '/',
      component: require('./views/index.vue')
    },
    {
      path: '/report',
      component: require('./views/report.vue')
    },
    {
      path: '/square',
      component: require('./views/square.vue')
    },
    {
      path: '/about',
      component: require('./views/about.vue')
    }
  ]
}