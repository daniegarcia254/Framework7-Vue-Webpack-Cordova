// Import Vue
import Vue from 'vue'

// Import Vue-i18n
import i18n from './i18n'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */

// Import Framework7 Icons
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

// Import Nunito FontFace
import NunitoFontFace from 'nunito-fontface/css/nunito/nunito-fontface.css'

// Import App Custom Styles
import AppStyles from './assets/sass/app.scss'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './main.vue'

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  i18n,
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes
  },
  // Register App Component
  components: {
    app: App
  }
});
