import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main.vue'
import Water_supply from './components/Water_supply.vue'
import Overhaul from './components/Overhaul.vue'
import Diagram from './components/diagram.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/water_supply',
            name: 'water_supply',
            component: Water_supply
        },
        {
            path: '/overhaul',
            name: 'overhaul',
            component: Overhaul
        },
        {
            path: '/stat',
            name: 'stat',
            component: Diagram
        },
    ]
})