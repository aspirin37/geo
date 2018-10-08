// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal';
import VueMq from 'vue-mq'

Vue.use(VueScrollReveal)
Vue.use(VueMq, {
    breakpoints: {
        sm: 1125,
        lg: Infinity,
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
