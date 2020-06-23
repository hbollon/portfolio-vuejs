import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue'

Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopyright} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCopyright, faFacebookSquare, faInstagramSquare, faLinkedin, faGithubSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/global.scss'
