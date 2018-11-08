import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import PicsUpload from '@/pages/PicsUpload'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'main-page',
        component: Main
    }, {
        path: '/pics-upload',
        name: 'pics-upload',
        component: PicsUpload
    }]
})
