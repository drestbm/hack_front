import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main.vue'
import Water_supply from './components/Water_supply.vue'
import Overhaul from './components/Overhaul.vue'
import Diagram from './components/diagram.vue'
import Diagram1 from './components/diagram1.vue'
import Diagram2 from './components/diagram2.vue'

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
        {
            path: '/stat1',
            name: 'stat1',
            component: Diagram1
        },
        {
            path: '/stat2',
            name: 'stat2',
            component: Diagram2
        },
    ]
})