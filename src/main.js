// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueMq from 'vue-mq'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

import { Modal } from 'bootstrap-vue/es/components';

Vue.use(VueAwesomeSwiper)
Vue.use(Modal);
Vue.use(Dropzone);
Vue.use(VueMq, {
    breakpoints: {
        xs: 360,
        sm: 1125,
        lg: Infinity,
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
