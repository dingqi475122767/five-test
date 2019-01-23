import Vue from 'vue';
import Router from 'vue-router';
import Dingqi from './components/Dingqi.vue';
import Leidan from './components/Leidan.vue';

Vue.use(Router)

const router =new Router({
    routes:[
        {
            path:"/",
            name:"dingqi",
            component:Dingqi
        },
        {
            path:"/leidan",
            name:"leidan",
            component:Leidan
        }
    ]
})

export default router