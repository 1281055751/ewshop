import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import {Card, Swipe, SwipeItem, Lazyload, Badge, Sidebar, SidebarItem, Collapse, CollapseItem, Tab, Tabs} from 'vant';

createApp(App)
    .use(store).use(router)
    .use(Swipe).use(SwipeItem)
    .use(Lazyload, {
        loading: require('./assets/images/2020-0820-5f3dfe9530bfd.png')
    })
    .use(SwipeItem).use(Badge)
    .use(Sidebar).use(SidebarItem)
    .use(Collapse).use(CollapseItem)
    .use(Tab).use(Tabs).use(Tabs).use(Card)
    .mount('#app')
