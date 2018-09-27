import Vue from 'vue'
import Router from 'vue-router'
import Panel from '@/pages/Panel'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Panel',
        component: Panel,
        // children: [{
        //     path: '',
        //     name: 'Main',
        //     component: Main
        // }]
    }]
})
